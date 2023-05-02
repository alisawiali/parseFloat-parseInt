console.clear();

class structured {
  constructor(name, ursname, age, greads) {
    this.na = name;
    this.ursname = ursname;
    this.a = age;
    this.g = greads;
  }
  sayHallo() {
    return ` Berlin  Mr.${this.na} ${2023 - this.a} geboren`;
  }
  egtAge() {
    return this.g.reduce((cum, cal) => cum + cal) / this.g.length;
  }
}
// structured.prototype.sayHallo = function(){
//     return `Berlin  Mr.${this.a} ${2023-this.a} geboren`
// }

const result = new structured("Imad", "Ali", 37, [1, 2, 1, 1, 1]);
console.log(result);

console.log(result.sayHallo());
console.log("Result ", result.egtAge());

//            extends   Klasse
class myNewObject extends structured{
    constructor(name, ursname, age, greads,javascript){
    super(name, ursname, age, greads)
    this.javascript = true;
    }
}
const myergebnis = new myNewObject("Amer", "Ali", 37, [1, 2, 1, 1, 1]);
console.log(myergebnis)