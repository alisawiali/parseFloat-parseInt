console.clear();
/*
  - - - - Recursion 
  - - - 
 */
/*             Recursive Function  
                Stack overflow
*/
console.clear();
console.log("-------------------------------------------");
const testing = (sum) => {
  if (sum === 0) {
    return 0;
  }
  return sum + testing(sum - 1);
};

console.log(testing(3));

console.log("-------------------------------------------");
const test = function (x) {
  if (x === 0) {
    return "Hallo";
  } else {
    return test(x - 1);
  }
};

let result = test(5);
console.log(result);

console.log("-------------------------------------------");

function isWord(word) {
  if (word.length === 1 || word.length === 0) {
    return true;
  }
  if (word[0] === word[word.length - 1]) {
    return isWord(word.charAt(0, word.length - 1));
  }
  return false

}

console.log(isWord("IMAMI"));
