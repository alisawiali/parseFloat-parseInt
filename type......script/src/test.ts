console.clear();
console.log(Math.ceil(10.3));
function addAll(...numb: number[]) {
  //   return numb.reduce((a, b) => a + b);
  let sum = 0;
  numb.forEach((e) => {
    sum += e;
  });
  return sum;
}

console.log(addAll(10, 20, 30, 20, 20, 2, 10.5, +true));
