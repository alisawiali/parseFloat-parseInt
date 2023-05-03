console.clear()

/*
- - - - - Add to Prototype 
*/
class User{
    constructor(id,firstName){
        this.i = id;
        this.first = firstName;
    }
    getSayHallo(){
        return this.first + " hallo "
    }
}

const myUserOne = new User(100,"Imad")
console.log('get: ',myUserOne.getSayHallo())
console.log('Prototype: ',User.prototype) // Object {}
console.log(myUserOne)

// Prototype  النموذج المبدئي   add 
User.prototype.sayKomme = function(){
    return this.first + " 35 Jahe alt"
}
console.log(myUserOne.sayKomme())

// object 
let main = Object.prototype.love = "Imad Alisawi"
console.log(main)
// String
 let myStrs= String.prototype.addandlöschen = function(ele){
    return `.${myUserOne.first}.`
}

console.log(myStrs())


