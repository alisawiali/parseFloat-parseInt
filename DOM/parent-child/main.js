/*
     - -  Elements- ParentElement
     -- gleich ==    parentNode
*/

const mydiv = document.getElementById("main");
const mytest = document.getElementById("test");

myBtn = mydiv.firstElementChild;
console.log(mydiv);
console.log(myBtn);
console.log(myBtn.parentNode); // ParentNode // Vater des Eleemnts

myBtn.onclick = function () {
  if (mydiv.classList.contains("main")) {
    this.parentNode.style.display = "none";
  } else {
    mytest.style.display = "none";
  }
};

console.log(mydiv.parentElement.tagName); // Body
if (mydiv.parentNode.tagName === "BODY") {
  console.log("hallo Body");
} else {
  console.log(" Body");
}
