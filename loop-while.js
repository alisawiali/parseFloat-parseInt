/*
---Array Methode ( Loop While)

Loop _ While

*/
//-----------------While--------------------------------
console.log("While schleife---------------->");
let myLoopWhilenames = [
  "Berlin",
  "Brandenburg",
  "München",
  "Leipzig",
  "Beyren",
  "Dortmont",
];

let i = 0;
while (i < myLoopWhilenames.length) {
  console.log(myLoopWhilenames[i]);
  i++;
  if (myLoopWhilenames[i] === "München") {
    break;
  }
}

//-----------------While--------------------------------

console.log("Loop (schleife)----------------------->");

let text = "";
for (let x = 0; x < myLoopWhilenames.length; x++) {
  text = `${x + 1} ${myLoopWhilenames[x]}`;
  if (myLoopWhilenames[x] === "Leipzig") {
    break;
  }
  console.log(`Stätte is `, text);
}

console.log("################ ---->");
for (let trunc = 1; trunc <= 3; trunc++) {
  console.log("this is yours Number " + trunc);
  
}

console.log()
console.log("######## While ########");

let test = 2;
while(test < 5){
   console.log(`this is your Number  + ${test}`)
   test++
}
