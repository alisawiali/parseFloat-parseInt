console.clear();
/*

  1: Erstelle eine classe mit dem Name.
  2: Definiere eine Private field mit dem #result.
  3: Definiere eine git Methode mit dem Namen result und gebe den Wert des Privten Feldens #result zuzrück.
  4: Definiere eine set Methode mit dem Namen result und Übergabe einen nuen Wert an das Private Feld #result
  5: Instanziere dein class und setze den wert von result und lese den wert von result danch aus. 
 */

class User {
  #private = "10";
  get result() {
    return this.#private;
  }
  set result(x) {
    this.#private = x;
    this.#private = `${"hallo " + " " + x}`;
    return this;
  }
}

const ergebnis = new User();
console.log(ergebnis.result);
ergebnis.result = "Mein New Result ";
console.log(ergebnis.result);

console.log("---------------------------")
// class Person {
//     constructor(name) {
//         this.setName(name);
//     }
//     getName() {
//         return this.name;
//     }
//     setName(newName) {
//         newName = newName.trim();
//         if (newName === '') {
//             throw 'The name cannot be empty';
//         }
//         this.name = newName;
//     }
// }

// let person = new Person('Jane Doe');
// console.log(person); // Jane Doe

// person.setName('Jane Smith');
// console.log(person.getName()); // Jane Smith


class Person {
    constructor(name) {
        this.name = name;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        newName = newName.trim();
        if (newName === '') {
            throw 'The name cannot be empty';
        }
        this._name = newName;
    }
}

// John joined a meeting.
// Jane joined a meeting.
// Peter joined a meeting.
// The latest attendee is Peter.