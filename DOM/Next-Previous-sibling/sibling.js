/*
  - -  Next  ==> التالي
   - - Previous ==> سابق
   - -  Sibilng ==>  أخ أو أخت

*/

const myMain = document.getElementById("main");

console.log(myMain.childNodes);
console.log(myMain.firstElementChild); // p
console.log(myMain.firstElementChild.nextSibling); //Secound Text
console.log(myMain.firstElementChild.previousSibling); // First text
console.log(myMain.lastElementChild.previousSibling); // Secound Text
console.log(myMain.lastElementChild.nextSibling); // Fianl Text

const mybtn = document.getElementById("test");
console.log(mybtn);

mybtn.onclick = function () {
  if (myMain.firstElementChild.nextElementSibling !== "Secound Text") {
    myMain.firstElementChild.nextElementSibling.style.color = "red";
  } else {
    console.log("versuch es nochmal");
  }
};

console.log(myMain.childNodes[1].nextSibling);
