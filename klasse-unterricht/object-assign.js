console.clear();
const products =
  {
    id: 1,
    name: "TV",
    price: 1000,
    category: "Electronics",
  }

let testing =
{
    id: 3,
    name: "Auto",
    price: 3000,
    category: "Electronics",
  }

Object.assign(products, testing)
console.log('Result :',testing)