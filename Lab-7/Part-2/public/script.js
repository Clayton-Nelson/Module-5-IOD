let data;
let currentCategory;

async function fetchData() {
  fetch("/index/fetch")
    .then((response) => response.json())
    .then((json) => {
      console.log(json.data);
      data = json.data;
      currentCategory = data;
      displayCards();
    })
}

function displayCards() {
  const cardsContainer = document.querySelector("#item-display");
  cardsContainer.innerHTML = "";

  currentCategory.forEach((item) => {
    const template = document
      .getElementById("item-template")
      .content.cloneNode(true);

    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.title;

    template.querySelector(".item-picture").appendChild(img);
    template.querySelector(".item-title").innerText = item.title;
    template.querySelector(".item-price").innerText = item.price;
    template.querySelector(".item-description").innerText = item.description;
    template.querySelector(".item-category").innerText = item.category;
    template.querySelector(
      ".item-rating"
    ).innerText = `Rating: ${item.rating.rate} (Count: ${item.rating.count})`;

    cardsContainer.appendChild(template);
  });
}

function filterAndPrintByCategory() {
  const CategoryInput = document.getElementById("refine-search-input").value;

  if (CategoryInput === "empty") {
    fetch("/index/sort?category=empty")
      .then((response) => response.json())
      .then((json) => {
        currentCategory = json.data;
        displayCards();
      });
  } else if (CategoryInput === "women's clothing") {
    fetch("/index/sort?category=womens")
      .then((response) => response.json())
      .then((json) => {
        currentCategory = json.data;
        displayCards();
      });
  } else if (CategoryInput === "men's clothing") {
    fetch("/index/sort?category=mens")
      .then((response) => response.json())
      .then((json) => {
        currentCategory = json.data;
        displayCards();
      });
  } else if (CategoryInput === "electronics") {
    fetch("/index/sort?category=elec")
      .then((response) => response.json())
      .then((json) => {
        currentCategory = json.data;
        displayCards();
      });
  } else if (CategoryInput === "jewelery") {
    fetch("/index/sort?category=jewels")
      .then((response) => response.json())
      .then((json) => {
        currentCategory = json.data;
        displayCards();
      });
  }

}

fetchData();
