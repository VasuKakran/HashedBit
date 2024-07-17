export async function fetchIPLData() {
  try {
      const response = await fetch('https://my-json-server.typicode.com/FreSauce/json-ipl/data');
      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Error fetching data:', error);
      return null;
  }
}