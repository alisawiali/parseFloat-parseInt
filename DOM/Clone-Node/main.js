/**
 *   ====>   Clon-Node() ====> Copy
 
 */

const firstMain = document.getElementById("main1");
const towMain = document.getElementById("main2");
const myBtn = document.querySelector("button");
const mymain = document.createElement("h1");

mymain.id = "Parent";
const myText = document.createTextNode("Hallo From Javascript");

mymain.appendChild(myText);
firstMain.appendChild(mymain);

console.log(firstMain.childNodes);
//Clone The Node And Save In Variable
const myCopy = firstMain.firstElementChild.cloneNode(true);

myBtn.onclick = function () {
  if (firstMain.firstChild !== "") {
    towMain.appendChild(myCopy);
    firstMain.insertBefore(mymain, firstMain.childNodes[2]);
  } else {
    console.log("No Child Node");
  }
};
