console.clear()
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
console.log(myUserOne.getSayHallo())
console.log(User.prototype)