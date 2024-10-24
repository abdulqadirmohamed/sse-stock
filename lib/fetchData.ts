
// Fetch all records
export const fetchData = async (endpoint: string) => {
  try {
    const res = await fetch(`${process.env.API_URL}${endpoint}?populate=*`, {
      next: {
        revalidate: 60,
      }
    });
    if (!res.ok) {
      throw new Error(`Failed to fetch from ${endpoint}. Status: ${res.status}`);
    }

    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    return null; // Return null in case of an error
  }
};

// Fetch the latest 3 records
export const limitFetchData = async (endpoint: string, limit:number) => {
  try {
    const res = await fetch(`${process.env.API_URL}${endpoint}?sort=createdAt:desc&pagination[limit]=${limit}&populate=*`, {
      next: {
        revalidate: 60,
      }
    });
    if (!res.ok) {
      throw new Error(`Failed to fetch from ${endpoint}. Status: ${res.status}`);
    }

    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    return null; // Return null in case of an error
  }
};
