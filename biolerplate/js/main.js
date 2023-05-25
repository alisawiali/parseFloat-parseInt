console.log("hallo Prowser");

console.log(document.title);
console.log(window.innerWidth);
// alert("Hallo welt");
// console.log("hallo Prowser");

// let main = prompt("Geben Sie Ihr Passwort für diese Seite ein");
// console.log(main);
// if (main !== null) {
//   alert("Du kommst hier nicht rein!");
// } else {
//   alert("Sie haben Zutritt");
// }

let redBox = document.getElementById("red");
redBox.style.backgroundColor = "#333";

const test = 0;
if (redBox === test && redBox === redBox) {
  console.log("hallo welt");
} else {
  document.body.style.backgroundColor = "green";
}

Array.from(redBox).forEach((element) => {
  console.log("Hallo Box", element);
});

//  ClassName holen
let classN = document.getElementsByClassName("box");
for (let i = 0; i < classN.length; i++) {
  const box = classN[i];
  console.log(box);
}

//  div holen ( TagName )
let mydiv = document.getElementsByTagName("h1");
console.log(mydiv);

//  Hole Refernze auf mit (>) bestimmtes DOM Eleemnt mittele css Selector
// wenn selector mehere Trffen hat, wird Immer das erste genommen
let ele = document.querySelector("div > span");
console.log(ele);


// querySelectorAll.... holet all
let AllSele = document.querySelectorAll(".box");
AllSele.forEach((ele) => {
  console.log("Hi", ele);
});
