/*

  - - - Element - ClassList  ==> [ remove, Add, Toggle]

*/

const mydiv = document.getElementById("show");
const myButtonOne = document.querySelector("button");

myButtonOne.onclick = function () {
  if (mydiv.classList.contains("min")) {
    mydiv.classList.add("parent");
  } else if (mydiv.classList.contains("ram")) {
    mydiv.classList.remove("cool");
  } else if (mydiv.classList.contains("fügen")) {
    mydiv.classList.add("imad", "js", "html");
  } else {
    mydiv.classList.toggle("Javascript");
  }
};
