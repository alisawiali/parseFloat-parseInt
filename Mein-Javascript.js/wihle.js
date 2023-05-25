// let products = ["BMW", "Arsedes", "Pen", "SW", "WW", "iphone"];

// let attempts = 0;
// while (attempts < 5) {
//   let myproduct = products[Math.floor(Math.random() * products.length)];
//   console.log(myproduct);
//   if (myproduct === "WW") {
//     console.log("Pen");
//     break;
//   } else {
//     console.log("BMW");
//     attempts++;
//   }
// }

const myFrinds = ["Imad", "Ali", "Ahmed", "Alaa", "MAm", "Mari"];
let atectment = 0;
while (atectment < myFrinds.length) {
  //console.log(myFrinds[atectment]);
  let test = myFrinds[Math.floor(Math.random() * myFrinds.length) + 1];
  if (test === "Alaa") {
    console.log("I am  -----------", test);
    break;
  } else {
    console.log("I am " + test);
    atectment++;
  }
}
