const myMain = document.getElementById("main");
const mySpan = document.getElementById("myChild");

console.log(myMain.contains(mySpan));
// Hier bezeugen, dass die ParentElement(main) ein class heißt (mychild)  hat mit methode (contains)
if (myMain.contains(mySpan)) {
  mySpan.textContent = "Changed from Javascript";
}

mySpan.className = mySpan.className === "myChild" ? "intervace" : "active";
console.log(myMain);
