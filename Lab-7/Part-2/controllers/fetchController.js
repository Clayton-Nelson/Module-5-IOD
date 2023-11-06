const Filter = require("../libraries/Filter");
const Fetch = require("../libraries/Fetch");
let newFilter = new Filter();
let newFetch = new Fetch();

const fetchData = async (req, res) => {
  try {
    const data = await newFetch.Store();
    res.status(200).json({ data: data })
  } catch (error) {
    console.error("Error", error);
    res.status(500).json ({ error: "Failed to fetch data" })
  }
};

const filterCategory = async (req, res) => {
  let CategoryInput = req.query.category;
  let data = await newFetch.Store();
  let currentCategory;

  if (CategoryInput === "empty") {
    currentCategory = data;
  } else if (CategoryInput === "womens") {
    currentCategory = newFilter.Womens(data);
  } else if (CategoryInput === "mens") {
    currentCategory = newFilter.Mens(data);
  } else if (CategoryInput === "elec") {
    currentCategory = newFilter.Elec(data);
  } else if (CategoryInput === "jewels") {
    currentCategory = newFilter.Jewels(data);
  }

  res.status(200);
  res.json({ data: currentCategory });
};

module.exports = {
  fetchData,
  filterCategory,
};
