/*


*/

function tople(...test) {
  let seunc = 0;
  for (let testes of test) {
    seunc += testes;
  }
  return seunc;
}

console.log(tople(1, 2, 3)); // 6
console.log(tople(1, 2, 3, 4, 5)); // 15
console.log(tople(1, 2));