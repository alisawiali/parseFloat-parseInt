console.log("hallo");

const main = document.querySelector("main");
const mainp = document.querySelector("main > p");
const news = document.getElementById("news");
const newsPargrapf = main.querySelector("#news").querySelectorAll(" article p");
// KindElement von main ausgabe
// console.log(main.children[2]);

console.log("previousSibling  --------> ", mainp.previousSibling);
console.log("previousElementSibling ------> ", mainp.previousElementSibling);
console.log("childNodes --------------->", main.childNodes);
console.log("firstElementChild  ------->", main.firstElementChild);
console.log("firstElementChild  ------->", main.lastElementChild);
console.log(main.parentElement);

console.log(news);
console.log(newsPargrapf);

// closest  ===> nimmt oder geht ausserhalb des parent
// Durchsucht der Vorfahren-Element bis zu der Selektor  übereinstimmen
const testnews = newsPargrapf[0].closest("article");
console.log(testnews);
