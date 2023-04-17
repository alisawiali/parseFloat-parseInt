/*
- - - Object - ein namesraum (namespace) der Eigenschaft
      und Methoden ( Function) unter sich versammelt/ vereint

*/

console.clear();
// instisalisireung
// definition von eigenschaften per (initialer)
let car = {};
console.log(typeof car);

// definition von eigenschaften nachträglich
car = {
  BMW: 330,
  speedUint: "km/h",
  brand: "Porsche",
};
console.table(car);

let bike = new Object();
console.log(typeof bike); // object

bike.BMW = 450;
console.log("bike------------------------------->", bike);

let array = [];
array[0] = "one";
bike["color"] = "red";

console.log("bike------------------------------->", bike);

const city = {
  car: [car],
  " bike": [bike],
};
console.log(city);

console.log('###########  ---------------------------->')
let animals = {
    type : 'Dog',
    voice : 'woof',
    spack: function(){
       console.log( `${this.type} say ${this.voice}`) ; // this bezeiht sich auf die Altern des Object
    },
    lauter: function(){
        // die stimme  groß geschrieben (WOOF)
       this.voice= this.voice.toUpperCase()
    }
}
animals.lauter()
animals.spack()


console.log('###########  ---------------------------->')

const Auto = {
    maxSpeed: 220,             
    currentSpeed: 0,           
    accelerate: function () { 
        this.currentSpeed = this.currentSpeed < this.maxSpeed ? this.currentSpeed + 30 : this.maxSpeed;
    }
}
Auto.accelerate()
Auto.accelerate()
Auto.accelerate()
Auto.accelerate()
Auto.accelerate()
Auto.accelerate()
Auto.accelerate()
Auto.accelerate()
Auto.accelerate()
Auto.accelerate()
Auto.accelerate()
Auto.accelerate()
Auto.accelerate()
Auto.accelerate()
Auto.accelerate()

console.log(Auto.currentSpeed)