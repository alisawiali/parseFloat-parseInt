/*
- - - Object - ein namesraum (namespace) der Eigenschaft
      und Methoden ( Function) unter sich versammelt/ vereint

*/

console.clear()
// instisalisireung
// definition von eigenschaften per (initialer)
let car = {}
console.log(typeof car)

// definition von eigenschaften nachträglich
 car ={
    'BMW': 330,
    'speedUint': 'km/h',
    'brand': 'Porsche'
}
console.table(car )



let bike = new Object()
console.log(typeof bike) // object


bike.BMW = 450;
console.log('bike------------------------------->',bike)

let array = []
array[0] = "one";
bike['color'] = 'red'

console.log('bike------------------------------->',bike)

const city = { 
    'car':[car],
   ' bike':[bike]

}
console.log(city)