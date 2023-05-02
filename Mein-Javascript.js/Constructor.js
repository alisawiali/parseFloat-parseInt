/*

  - - - -  Constructor  ==> البناء 

*/

// Or   => Oder
//   function User (One,tow,three){
//      this.test =0 One;
//      this.main = tow;
//      this.therr = three;
//}
console.clear();

class User {
  constructor(id, user, slary) {
    this.x = id;
    this.y = user;
    this.s = slary + 1000 + " Euro ";
  }
}
let userOne = new User(100, "Alisawi", 5000);
let userTow = new User(101, "Imad", 6000);
let userThree = new User(102, "Ali", 7000);
console.log(userOne.x);
console.log(userOne.y);
console.log(userOne.s);
console.log(" <----------------------------------------> ");
console.log(userOne.constructor /*البناء */ === User);
console.log(userOne instanceof /* حالة */ User);

console.log(" <------------------mmmm----------------------> ");

class Users {
  constructor(id, user, salary) {
    this.x = id;
    this.y = user || "Unknown";
    this.s = salary > 2000 ? salary + 200 : salary;
    this.mas = function () {
      return `Hallo ${this.y} i love in Berlin  and my Salary is  ${this.s} Euro`;
    };
  
  }

}
let userOnes = new Users(100, "Alisawi", 6000);
//let userTows = new Users(101, "", 6000);
// let userThrees = new User(102,"Ali",7000)
console.log(userOnes.x);
console.log(userOnes.y);
console.log(userOnes.mas());
