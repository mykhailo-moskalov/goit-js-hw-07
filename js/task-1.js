const categoryItems = document.querySelectorAll("li.item");

const numberOfCategories = categoryItems.length;
console.log(`Number of categories: ${numberOfCategories}`);

categoryItems.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const elementsCount = item.querySelectorAll("li.item li").length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});
