function getYearFromDate(dateString: string): number | null {
  try {
    const date = new Date(dateString);
    const year = date.getUTCFullYear();
    return year;
  } catch (error) {
    return null;
  }
}

export { getYearFromDate }