const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  const categoryName = category.firstElementChild.textContent;
  console.log("Category:", categoryName);
  const listItems = category.lastElementChild.children;
  const quantityItems = listItems.length;
  console.log("Elements:", quantityItems);
});
