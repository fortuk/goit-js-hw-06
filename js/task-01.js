const allCategoriesEl = document.querySelectorAll('li.item');
const numbersCategoriesEl = allCategoriesEl.length;
console.log(`Number of categories: ${numbersCategoriesEl}`);


for (let i = 0; i < numbersCategoriesEl; i += 1) {
    const hederTextEl = allCategoriesEl[i].firstElementChild.textContent;
    console.log(`Category: ${hederTextEl}`);

    const elementsEl = allCategoriesEl[i].lastElementChild;
    const numberOfElemenetsEl = elementsEl.querySelectorAll('li');
    console.log(`Elements: ${numberOfElemenetsEl.length}`);
}