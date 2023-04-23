/*
 #######  Map Mehode 
  - - - => Set 
  - - - => get
  - - - => delete 
  - - - => clear
  - - - => has


  ######## Propertires 
  - - - - Size

 */

console.clear();
let myMap = new Map([
    [10,"Number"],
    ["Name",'String'],
    [false,'Boolean']
]);
console.log(myMap);

console.log(myMap.get(10)); // String
console.log(myMap.get('Name')); // Number
console.log(myMap.get(false)); // Boolean قيمة منطقية


console.log(myMap.size); // 3

myMap.delete("Name")
console.log(myMap); // true
console.log('Ergebnis:(false)=> weil die Name vorher gehlöscht ist',myMap.delete("Name")); //false,weil es gewlöscht wurde


// has
console.log(myMap.has(10)) // True