
console.clear()
let meeting = {
    arr: [],
    add(attendee) {
        console.log(`${attendee} joined the meeting.`);
        this.arr.push(attendee);
        return this;
    },
    get latest() {
        let count = this.arr.length;
        return count === 0 ? "hallo": this.arr[count -1];

    }
};

meeting.add('John').add('Jane').add('Peter').add("Imad");
console.log(`The latest attendee is ${meeting.latest}.`);





// console.clear()
// John joined a meeting.
// Jane joined a meeting.
// Peter joined a meeting.
// The latest attendee is Peter.


function User(name,email,age,showemail){
    this.name = name;
    this.em = email;
    this.age = age;
    this.Upadte = function(nueName){
        if(this.age > 18){
            this.name = nueName;
        }else{
            console.log("Sie sind unter 18 Jahr ")
        }
      
    }
    this.showemail = function(){
        if(showemail){
            return `Email is ${this.em}`
        }else{
            return 'Date Is Private '
        }
    }
}
console.log("------------")
const newUser = new User ("Imad","@email",19,false)
console.log("result is: ",newUser.name)
newUser.Upadte("Alisawi")
console.log(newUser.name)
console.log(newUser.showemail())