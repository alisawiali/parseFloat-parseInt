/*
  ----- Inheritance  => ميراث

  ---------- wie merge Also wir habne user in Admin germgt
*/

console.clear();

class user {
  constructor(id, userName, Salary) {
    this.i = id;
    this.u = userName;
    this.s = Salary;
  }

  sayHallo() {
    return `Hallo ${this.u}`;
  }
}

let myUser = new user("Imad", "Alisawi", 33);
console.log(myUser.i);
console.log(myUser.sayHallo());

console.log("-----------------------------------");
class Admin extends user {
  constructor(id, userName, Salary, num) {
    super(id, userName, Salary, num);
    this.p = ["num","hallo"];
    this.s= Salary > 200 ? Salary + 100 : Salary;
  }
}

let myAdmin = new Admin("Ali", "Alla", 2000, "");
console.log(myAdmin.i);
console.log(myAdmin.u);
console.log(myAdmin.s);
console.log(myAdmin.p);

console.log(myAdmin.sayHallo());

