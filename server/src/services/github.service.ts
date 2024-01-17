import dotenv from 'dotenv';
import { getYearFromDate } from '../utils/date.utils';

// ENV variables
dotenv.config();
const GITHUB_ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN;

interface yearContributions {
  year: number,
  total: number,
  max: number
}

interface userContributions {
  total: number,
  max: number,
  years: yearContributions[]
}

/**
 * Get the creation year of a Github user's account
 * @param username
 */
const getAccountCreationYear = async(username: string): Promise<string | null> => {
  try {
    const url = 'https://api.github.com/graphql';
    const query = `{user(login: "${username}") {createdAt}}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GITHUB_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query })
    });

    const data = await response.json();
    return data.data.user.createdAt;
  } catch {
    return null;
  }
}

/**
 * Get a user's total number of Github contributions in a year
 * @param username 
 * @param year 
 */
const getYearContribution = async(username: string, year: number): Promise<yearContributions | null> => {
  try {
    const url = `https://skyline.github.com/${username}/${year}.json`;

    const response = await fetch(url, { method: 'GET' });
    
    const data = await response.json();
    const total = data.contributions
      .flatMap((week: any) => week.days.map((day: any) => day.count))
      .reduce((acc: any, count: any) => acc + count, 0);

    return {
      year: data.year,
      total: total,
      max: data.max
    }
  } catch {
    return null;
  }
}

/**
 * Get a user's total number of Github contributions
 * @param username 
 * @param year 
 */
const getAllContributions = async(username: string): Promise<userContributions | null> => {
  const currentYear = new Date().getFullYear();
  const years = [];
  
  // Get user's account creation date
  const createdAt = await getAccountCreationYear(username);
  if (createdAt===null) return null;
  const createdYear = getYearFromDate(createdAt);

  // Create an array with user's Github account active years
  for (let year=createdYear!; year<=currentYear; year++) {
    years.push(year);
  }

  // Get contribution data for each active year
  const totalContributions = await Promise.all(
    years.map(async (year) => {
      return await getYearContribution(username, year)
    })
  );

  // Filter out null values from totalContributions
  const filteredContributions = totalContributions.filter((contribution) => contribution !== null) as yearContributions[];

  const userContribution = {
    total: filteredContributions.reduce((sum, item) => sum + item!.total, 0),
    max: Math.max(...filteredContributions.map(item => item!.max)),
    years: filteredContributions.slice().reverse()
  }

  return userContribution;
}

export { userContributions, getAllContributions };