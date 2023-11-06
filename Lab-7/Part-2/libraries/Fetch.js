class Fetch {
  async Store() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log("API Data successfully fetched");
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
}
module.exports = Fetch;
