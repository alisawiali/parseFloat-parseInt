// 3. Convert Keys and Values into arrays
console.clear()
function getKeyValuePairs(object) {
    return Object.entries(object);
  }
  console.log(
    "getKeyValuePairs 3: ",
    getKeyValuePairs({ cats: 1, dogs: 2, turtles: 4 })
  );
  //getKeyValuePairs 3:  [ [ 'cats', 1 ], [ 'dogs', 2 ], [ 'turtles', 4 ] ]
  console.log();