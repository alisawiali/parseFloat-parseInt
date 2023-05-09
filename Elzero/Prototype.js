console.clear()

class User {
    // Static 
    static counter = 0;
    constructor(name,lastName) {
        this.nam = name;
        this.last = lastName;
        User.counter++;
    }
    sayHallo(){
      return `Hallo Ms. ${this.nam}`
    }
    geveLastName(){
        return `hallo Ms. ${this.last}`
    }

}
class Admin extends User{
    constructor(name,lastName){
        super(name,lastName)
    }
}



let myNewName1 = new User("Imad","Alisawi");
let adminOne = new User("Ali","Amer")
console.log(adminOne)
// console.log(User.counter)
// console.log(User.counter)
console.log(myNewName1.sayHallo())
console.log(myNewName1.geveLastName())


