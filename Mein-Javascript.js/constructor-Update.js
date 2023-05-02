/*

 - - - - - -  Constructor Update  Properties And Built In Constructors

 1: Static ثابتة
 2: Inheritance  ميراث
*/

console.clear()


class User{
    constructor(id,userName,salary){
        this.o = id;
        this.l = userName;
        this.t = salary;
    }
    newUpdate(newName){
        this.l= newName;
    }
  
}

const  resultMyUser = new User ("Imad","Alisawi","Entwickler")

console.log(resultMyUser.o)
resultMyUser.newUpdate ("alisawi")
console.log(resultMyUser.l)


console.log("------------------------")
let strOne = "String"
let strnew = new String("String")


console.log(typeof strOne) // String
console.log(typeof strnew) // object

console.log(strOne instanceof /* حالة */ String) // false
console.log(strnew instanceof /* حالة */ String)  // true


console.log(strOne.constructor ===  /* حالة */ String) // True
console.log(strnew.constructor ===  /* حالة */ String)  // True