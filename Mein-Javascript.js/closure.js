console.clear();

const shop = () => {
  const names = ["Imad", "Ali", "Alisawi"];
  const printItem = () => {
    names.forEach((itme) => console.log(itme));
  };
  const addItem = (x) => {
    names.push(x.toUpperCase());
  };
  return { printItem, addItem };
};
let funck = shop();
// console.log(funck)
funck.printItem("");
funck.addItem("");
//-----------------------------------------------------------------------
function sumTo(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumTo(4));
//For Loop startet bei 0 und stoppt bei 4: 0+1+2+3 => 6
function names(n) {
  if (n === 0) {
    return 1;
  }
  return n + names(n - 1);
}

let result = names(5);
console.log(result);
//For Loop startet bei 0 und stoppt bei 5: 0+1+2+3+4 = 10
