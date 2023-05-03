console.clear();
class user {
  #e;
  constructor(id, ursname, salary) {
    this.i = id;
    this.urs = ursname;
    this.#e = salary;
  }

  getSalray() {
    return parseInt(this.#e) * 0.2;
  }
}

const userOne = new user(100, "Imad", "200 euro");
console.log(userOne);
console.log(userOne.getSalray());


// erben
// class test extends user {
//   constructor(id, ursname, salary, num) {
//     super(id, ursname, salary, num);
//     this.nu = num;
//   }
// }

// const myBlock = new test(100, "Imad",1,22);
// console.log(myBlock.i);
// console.log(myBlock.urs);
// console.log(myBlock.nu);
// console.log(userOne.getSalray());

