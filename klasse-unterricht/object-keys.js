console.clear();
const products = [
  {
    id: 1,
    name: "TV",
    price: 1000,
    category: "Electronics",
  },
  {
    id: 2,
    name: "phone",
    price: 500,
    category: "Electronics",
  },
  {
    id: 3,
    name: "Auto",
    price: 3000,
    category: "Electronics",
  },
];
let myExsam = products[0];
let productPreportyArray = Object.keys(myExsam);
//nutzer soll auswählen, wonach sortiert wird id || name

let htmlSelectString = "<select>";

for (let index = 0; index < productPreportyArray.length; index++) {
  const key = productPreportyArray[index];
  let option = `<option>${key}</option>`;
  htmlSelectString += option;
}

htmlSelectString += "</select>";
console.log(htmlSelectString);
