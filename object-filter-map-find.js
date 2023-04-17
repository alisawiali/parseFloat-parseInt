console.log("#######------- Array With (filter)---------> ");
console.clear();
const arr = [
  { name: "TV", price: 100 },
  { name: "Album", price: 10 },
  { name: "TV", price: 50 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 20 },
];

const myFilter = arr.filter((x) => {
  return x.price <= 100;
});
console.log(myFilter);

console.log("#######------- Array With (map)---------> ");

let myMap = arr
  .map((x) => {
    return x.name;
    // return x.price
  })
  .join(" ");
console.log(myMap);

console.log("#######------- Array With (find)---------> ");
let myFind = arr.find((x) => {
  return x.name === "Phone"; // { name: 'Phone', price: 500 }
});
console.log(myFind);

console.log("#######------- Array With (forEach)---------> ");
arr.forEach((element) => {
  console.log(element.price); //100 ,10,50,5000,1000,20
  //console.log(element.name)// TV , Phone ....
});

console.log("#######------- Array With (some)---------> ");
let someTest = arr.some((x) => {
  return x.price <= 10; // true
});
console.log(someTest);



let red = arr.reduce((currend,x) => {
    return x.price + currend // 1682
},2);
console.log(red);