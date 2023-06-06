// export default textClassList;

import { addClass } from "./main.js";
addClass();

export function textClassList() {
  let button = document.getElementById("clcik-me");
  button.addEventListener("click", showHalloBerlin);
}
textClassList();

function showHalloBerlin() {
  alert("Hallo Berlin");
}
