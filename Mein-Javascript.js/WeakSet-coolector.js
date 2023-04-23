
/*

---  Set And WeakSet And CArbage Collector
 */

console.clear();
let mySet = [1,  3, 3, 3, 3, 1, "A", "C", "A"];
let mySetData = new Set(mySet);
console.log(mySetData);

console.log("------// Size---------->")
// Size
console.log(mySetData.size); // 4 

// Values + Keys Alias
console.log("------// Values + Keys Alias---------->")

let iterator = mySetData.keys()
console.log(iterator.next().value)// Das erst  => iterator = 1
console.log(iterator.next().value)// Das zweite  => iterator = 2
console.log(iterator.next().value)// Das dritte  => iterator = 3
console.log(iterator.next().value)// Das dritte  => iterator = "A"
console.log(iterator.next().value)// Das dritte  => iterator = Undefind


// Foreach
console.log("------ Foreach-".repeat(2))
mySetData.forEach((e)=>{
    console.log(e)
})

console.log("##".repeat(10))


console.log("WeakSet  => hat kein Keys und Entrise  wir können kein forEach benutzen damit")
console.log("-".repeat(20))
console.log("Set  => hat  Keys und Entrise ")