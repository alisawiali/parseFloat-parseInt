// 3. Convert Keys and Values into arrays
console.clear();
function getKeyValuePairs(object) {
  return Object.entries(object);
}
console.log(
  "getKeyValuePairs 3: ",
  getKeyValuePairs({ cats: 1, dogs: 2, turtles: 4 })
);
//getKeyValuePairs 3:  [ [ 'cats', 1 ], [ 'dogs', 2 ], [ 'turtles', 4 ] ]
console.log();

// 4. Convert keys and values into objects
let person = {
  firstName: "Michael",
  lastName: "Smith",
  citizenship: "Germany",
  city: "Berlin",
  gender: "male",
  job: "driver",
  age: 28,
  height: 178,
  "eye colour": "brown",
};
function getKeyValueObjects(object) {
  const entrise = Object.entries(object);
  let arra = [];

  for (let index = 0; index < entrise.length; index++) {
    const element = entrise[index];

    const main = Object.fromEntries([element]);
    arra.push(main);
    // console.log(main)
  }
  return arra;
}

console.log("Result Erst Lösung: ", getKeyValueObjects(person));
console.log();
console.log('---------------------------------------------')

function getKeyValueObjects(x) {
  let arr = [];
  for (const test in x) {
    arr.push({ [test]: x[test] });
  }
  return arr;
}
console.log('Zweit Lösung ==========> ',getKeyValueObjects(person));
