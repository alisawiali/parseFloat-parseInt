console.clear();
const product = {
  handys: 12,
  Mosue: 4,
  TV: 10,
  Keybaord: 20,
};

console.log('<---------------  Object.values(product)---------------->')
const sumProduct = Object.values(product);
console.log(sumProduct);

let result = 0;
for (let index = 0; index < sumProduct.length; index++) {
  const element = sumProduct[index];
  console.log(element);
  result += element;
}
console.log("Sum alle verkäfer", result); // 26  result

console.log()
//           Object.entries                hier nimmt den beiden ( keys , value)
console.log('<----------------- Object.entries(product)-------------------->')
const keyValueWert = Object.entries(product); // hier nimmt den beiden ( keys , value)
console.log(keyValueWert);

console.log()
console.log('<--------------- Object.fromEntries ([]) --------------->')
// hier wird einzeler gerufen  Object.fromEntries ([])
const onlyParProduct = Object.fromEntries([
  keyValueWert[0], // handys: 12
  keyValueWert[1], // Mosue: 4
]);
console.log(onlyParProduct);



