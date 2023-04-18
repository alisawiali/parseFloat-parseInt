console.clear();
const products =
  {
    id: 1,
    name: "TV",
    price: 1000,
    category: "Electronics",
  }



  for (key in products) {
    console.log(`${key}: ${products[key]} `)   
  }