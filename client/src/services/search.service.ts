export interface User {
  username: string;
  avatar: string;
}

/**
 * Fetch a user's total and yearly Github contributions.
 *
 * @param {string} query - Search query
 * @returns {Promise<User[] | null>} An array of github users
 */
export const searchGithubUser = async (query: string): Promise<User[] | null> => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/search/${query}`, { method: 'GET' });

    if (!response.ok) throw new Error(`Failed to fetch data. Status: ${response.status}`);
    
    return await response.json();
    
  } catch (err: any) {
    console.error(err.message);
    return null;
  }
}