/**
 * Search for Github users
 * @param query The search query
 * @param n The maximum of users to return
 * @returns An array of n users
 */
const userSearch = async(query: string, n: number): Promise<any> => {
  try {
    const url = `https://api.github.com/search/users?q=${query}&per_page=${n}`;

    const response = await fetch(url, { method: 'GET' });
    const results = await response.json();

    if (results.items.length > 0) {
      const filteredSearch = results.items.map((item: any) => {
        return {
          username: item.login,
          avatar: item.avatar_url
        }
      })
      return filteredSearch;
    } else {
      return null;
    }
  } catch {
    return null;
  }
}

export { userSearch }