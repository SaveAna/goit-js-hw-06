const list = document.querySelector('ul#categories');
console.log(`Number of categories: ${list.children.length}`);

const listItem = document.querySelectorAll('li.item');
listItem.forEach(element => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});
