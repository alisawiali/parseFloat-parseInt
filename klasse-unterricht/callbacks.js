console.clear();



console.log();
console.log("----------- Zweite Beispiel ---------- ");
function myImput(one, tow, callbacks) {
  if (one && tow) {
    callbacks(one, tow);
    //test(one, tow);
  } else {
    console.log("plece unter your number");
  }
}
// function test(a, b) {
//     console.log(`Result ${a} + ${b} = ${a + b}  `);
//   }
// myImput(2,10,test)

myImput(2, 10, function (a, b) {
  console.log(`Result ${a} + ${b} = ${a + b}  `);
});

console.log("----------- Erste Beispiel ---------- ");

// console.log(
//   " Clousre - die Kombination eine function mit Varibale aus dem Umfeld. das Umfeld kann der global scope"
// );

const btn1 = {
  display: "visbael",
};

const f = () => {
  btn1.display = "none";
};
f();
console.log(btn1.display);
console.log("<---------------------------------------->");
function warp() {
  const imad = "Alisawi";
  const arr = [1, 33, 23, 4, 5];

  return function test() {
    console.log(imad, arr, "testing");
  };
}

const test = warp();
test();

console.log("<---------   Wiht Parameter ------------------------------->");

// function createFunction(x) {
//   return function (y) {
//     console.log("result", x + y + 2);
//   };
// }
// const addTNumber = createFunction(2);
// addTNumber(20);
// addTNumber(2);



