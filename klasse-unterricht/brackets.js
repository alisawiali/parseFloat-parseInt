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

function  myProduct(obj, prop, value){
    obj[prop] = value; // obj.name bracket notation 
    return obj
}
console.log(myProduct(products[1],'price',2000))