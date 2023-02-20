async function fetchData(url, options = {}) {
    try {
      const response = await fetch(url, options);
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message);
      }
  
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  export default fetchData