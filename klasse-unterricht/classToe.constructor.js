console.clear();
class Product {
  constructor(name, price) {
    this.n = name;
    this.p = price;
  }
  toText() {
    return ` ${this.n}  Trainingsanzug   ${this.p} €  insgesamt.  ${this.containedVAT()}`;
  }
  containedVAT() {
    return `${(this.p * 0.16).toFixed(2)}`;
  }
}
const tracksuit = new Product("Adidas tracksuit", 150.0); // Adidas Trainingsanzug 150,00 € insgesamt. 24,00 € inkl. MwSt. (16%).
const shoes = new Product("Puma running shoes", 85.99);
const socks = new Product("Socks set", 4.99);

console.log(tracksuit.toText());
console.log(shoes.toText());
console.log(socks.toText());
// console.log(tracksuit.containedVAT());

class Cart {
  constructor() {
    this.products = [];
  }
  addProduct(shoppedProduct) {
    if (shoppedProduct instanceof Product) {
       this.products.push(shoppedProduct);
        
    } else {
      return "This Product not Found";
    }
  }
  getProductInfoCart() {
    for (let i = 0; i < this.products.length; i++) {
      console.log(this.products[i].toText());
    } 
    //  getProductInfoCart() {
    //     this.products.forEach(ele =>{
    //       console.log(ele.toText());
    //     })
  }
  getTotalItemsPrice() {
    let ergbnis = 0;
     this.products.forEach((ele) => {
       ergbnis += ele.p;
    });
    return ` this price von 3 Product ist ${ergbnis.toFixed(2)}`
  }
  
}

const cart = new Cart();
cart.addProduct("potato"); // Diese ist in unserem Shop nicht erhältlich!
cart.addProduct(tracksuit); // Dein Warenkorb enthält jetzt 1 Produkt
cart.addProduct(shoes); // Dein Warenkorb enthält jetzt 2 Produkte
cart.addProduct(socks); // Dein Einkaufswagen enthält jetzt 3 Produkte

cart.getProductInfoCart();
console.log(cart.getTotalItemsPrice());
