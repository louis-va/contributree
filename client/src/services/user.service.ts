export interface yearContributions {
  year: number;
  total: number;
  max: number;
}

export interface userContributions {
  avatar: string;
  total: number;
  max: number;
  years: yearContributions[];
}

/**
 * Fetch a user's total and yearly Github contributions.
 *
 * @param {string} username - The GitHub username of the user.
 * @returns {Promise<userContributions | null>} A promise that resolves to the user's contributions or null if the request fails.
 */
export const fetchUserContributions = async (username: string): Promise<userContributions | null> => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/user/${username}`, { method: 'GET' });

    if (!response.ok) throw new Error(`Failed to fetch data. Status: ${response.status}`);
    
    return await response.json();
    
  } catch (err: any) {
    console.error(err.message);
    return null;
  }
}