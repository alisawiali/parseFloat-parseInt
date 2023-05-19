/*

 - - - -global console
  - - - Client Height
   - - - Client  Widht 


*/

const myMain = document.getElementById("main");
console.log(myMain.clientHeight + " px "); //(544, widht) (18,5  height)
// 1: clientHeight zählt padding
// 2: Nimmt kein Border
// 3:  nimmt kein Scroll
// 4: nimmt kein maregin
console.log(myMain.clientWidth);
// 1: clientHeight zählt padding
// 2: Nimmt kein Border
// 3:  nimmt kein Scroll
// nimmt kein Margin
console.log("---------client---------");
const myclass = document.querySelector(".child");
console.log(myclass.clientHeight);
console.log(myclass.clientWidth);

console.log("--------scroll--------");
// scrollHeight / scrollwidth ===> nimmt die padding
console.log(myMain.scrollHeight);
// nimmt padding
// nimmt kein border
// nimmt kein scroll
console.log(myMain.scrollWidth);
// nimmt padding
// nimmt kein border
// nimmt kein scroll

console.log("-------offset-----------");
// es Nimmt padding scroll border aber Ohne Margin
console.log(myMain.offsetHeight);
console.log(myMain.offsetWidth);
