/*
  - -- -Appendchild
   - - - Remove child
*/
const mybtn = document.querySelector("button");
const myMaindiv = document.getElementById("main");
const mymain = document.createElement("div");

mymain.id = "Parent";
const myText = document.createTextNode("Hallo From Javascript");

mymain.appendChild(myText);
myMaindiv.appendChild(mymain);
myMaindiv.insertBefore(mymain, myMaindiv.childNodes[2]);
console.log(myMaindiv);

// mybtn.onclick = function () {
//   myMaindiv.removeChild(myMaindiv.childNodes[6]);
// };
console.log(myMaindiv.childNodes);
//myMaindiv.removeChild(myMaindiv.childNodes[4]);
