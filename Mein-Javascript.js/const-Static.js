console.clear();
class User {
  // Static Properties
  static counter = 0;
  constructor(name, email) {
    this.n = name;
    this.em = email;
    User.counter++;
  }
  sayHallo() {
    return `Hallo ${this.n}`;
  }
  showEmail() {
    return `Yoer email Is ${this.em}`;
  }
  static myCounterObject = function () {
    return `hallo ${this.counter} hier ist  main object von ${this.name}`;
  };
}

const user1 = new User("Imad", "alisawi@gmail.com");
const user2 = new User("Imad", "alisawi@gmail.com");
const user3 = new User("Imad", "alisawi@gmail.com");
const user4 = new User("Imad", "alisawi@gmail.com");
console.log(user1.sayHallo());
console.log(user1.showEmail());

console.log(typeof User); // function
console.log(User === User.prototype.constructor); // True

console.log(User.myCounterObject());

// your code goes here
console.log("#--------------------------------------------");
class Employee {
  constructor(id, firstName, lastName, taxId, salary) {
    this.i = id;
    this.frist = firstName;
    this.last = lastName;
    this.tax = taxId;
    this.sal = salary;
  }
  generatePaySlip() {
    return `${this.i} ${this.frist} ${this.last} ${this.tax}`;
  }
}

const myEmployeeResult = new Employee("Iraq", "Imad", "Ali", 100, 3000);
console.log(myEmployeeResult);

console.log(myEmployeeResult.generatePaySlip());

class Manager extends Employee {
  constructor(id, firstName, lastName, taxId, salary) {
    super(id, firstName, lastName, taxId, salary);
    this.managedEmployees = ["Imad", "Ali"];
  }
  addManagedEmployee(Employee) {
    return `${this.managedEmployees.push(Employee)} Producte`;
  }
  removeManagedEmployee(employee) {

  }
}

const myManager = new Manager();
console.log(myManager.addManagedEmployee());

