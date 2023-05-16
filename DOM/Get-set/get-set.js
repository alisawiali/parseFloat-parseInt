/*
 - - - InnerHTML
 - - - outerHTML
 - - - textContent
 - - - Get- Set Attribute 
        - -  hasattribute   => له صفة
        - -  getattribute   => ينسب
        - -  setattribute   => يتم تعديل صفة
        - -  removeattribute => يتم حذف صفة
*/
const myElement = document.getElementById("main");
// console.log((myElement.innerHTML = "This is my Neu <span> Text </span>"));
// console.log((myElement.outerHTML = "This is my neu  <span> Text</span>"));
// console.log((myElement.textContent = "This is my Neu  <span> Text</span>"));

// myElement.textContent = "hallo welt";
// console.log(myElement);

const myDiv = document.querySelector("div");
myDiv.innerHTML = "Ich bin das secound Element";
myDiv.id = "id.from.js";
myDiv.className = "Parent-from.js";
console.log(myDiv);

const myImg = document.querySelector("img");
myImg.src = "https://placehold.it/200/ddd";
myImg.alt = "Bild 200px";
myImg.title = "berlin";

console.log(myImg.title);
myImg.setAttribute("alt", "This Text changed from javascript");
myImg.title = " This is my Title";
myImg.setAttribute("src", "https://placehold.it/150/000");
console.log(myImg);
