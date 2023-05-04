console.clear();

class CalcName {}

class Calc {
  // class fields
  // public fields - innerhalb und  außerhalb sichtbar und  zugreifen
  #result = 0;

  // private  fields - innerhalb der der klasse sichtbar und zugreibar
  #private = 0;

  // Static fields - nur über die Klassendefiniation und nicht über die Instanz zu erreichen werden
  // nicht an die Instanz übergeben
  static Stat = "Berlin";

  // class Methodes
  // Der constructor wird automatisch bei Instanzierung der Klasse aufgerufen.
  constructor() {}

  // public Methods
  take(x) {
    this.#private = x;
    console.log("thake", +x);
    return this;
  }
  add(x) {
    this.#result = this.#private + x;
    console.log(`Add ${x} - Result is ${this.#result}`);
    this.#private = this.#result;
    this.#privMethode();
    return this;
  }
  getRsult() {
    console.log(this.#result);
    return this.#result;
  }

  // Private methode - nur innerhalb der Klasse sichtbar und zugreifbar
  #privMethode() {
    console.log("I am Privat");
  }

  muliplayWith(x) {
    this.#result = this.#private * x;
    console.log(`Multiply * :   ${x}  ${this.#result}`);
    this.#private = this.#result;
    return this;
  }
  divideBy(x) {
    this.#result = this.#private / x;
    console.log(`Divide: / : ${x}is  ${this.#result}`);
    this.#private = this.#result;
    return this;
  }
  substract(x) {
    this.#result = this.#private - x;
    console.log(`Divide - : ${x} is ${this.#result}`);
    this.#private = this.#result;
    return this;
  }
}

const calc = new Calc();

calc
  .take(5) //   5
  .add(10) // 10
  .add(34) // 49
  .muliplayWith(2)
  .divideBy(4)
  .substract(20);

console.log('##########-------------------------')
  const result = calc.take(2).add(3).divideBy(2).muliplayWith(5).getRsult()

console.log(result) // 12.5