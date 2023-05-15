console.clear();
// class User {
//   #privat;
//   constructor(firsName, PrivatHalte) {
//     this.f = `${firsName} ist eine schöne Stadt`;
//     this.#privat = PrivatHalte;
//     console.log(this.#privat)
//   }
//   getPrivat(privat){
//     return this.#privat = privat
//   }
// }

// const resultuser1 = new User("Berlin",100);
// const resultuser2 = new User("Brandenburg",200);

// console.log(resultuser1.f);
// console.log(resultuser2.f);

/*class User {
  #toll = null;
  constructor(firsName, pap) {
    this.f = `${firsName} ist eine schöne Stadt`;
    this.#toll = pap;
    console.log(this.#toll);
  }
  getPrivat(tooles) {
    return (this.#toll = tooles);
  }
}

const resultuser1 = new User("Berlin", 100);
const resultuser2 = new User("Brandenburg", 200);

console.log(resultuser1.f);
console.log(resultuser2.f);
console.log(resultuser2 .getPrivat())
*/
console.clear();
class Worker {
  #tool = null;
  constructor(firsName, pap) {
    this.f = `${firsName} ist eine schöne Stadt`;
    this.#tool = pap;
    console.log(this.#tool);
  }
  setTool(tooles) {
    this.#tool = tooles;
    return this;
  }
  getToolName() {
    return this.#tool.name;
  }
}
const worker1 = new Worker("Carten", 100);
const resultuser2 = new Worker("Brandenburg", 200);
console.log(worker1.f);
console.log(resultuser2.f);
//--------------------
class Tool {
  name = "";
  constructor(name) {
    this.name = name;
  }
}
const werkzeug = new Tool("Hammer");
console.log(werkzeug);
//   console.log(resultuser1.setTool("hallo"))
console.log("-----");
worker1.setTool(werkzeug);
console.log(worker1.getToolName());
