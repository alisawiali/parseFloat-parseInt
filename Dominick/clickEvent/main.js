// button.addEventListener("click", () => {
//   alert("Hallo Blerin");
// });

import { textClassList } from "./add.js";
textClassList();
export function addClass() {
  let button = document.getElementById("main");
  button.addEventListener("click", halloImad);
  button.classList.add("my-class");
}
addClass();

function halloImad() {
  alert("Hallo Imad");
  this.style.backgroundColor = "red";
  this.style.border = "none";
  this.style.color = "white";
  this.style.padding = "1em";
}
//  Da nachdem die Seite aufgeladen wird, wird dann die function gehen
addEventListener("DOMContentLoaded", () => {});

//  IIFE
// (() => {})()(function () {})();
