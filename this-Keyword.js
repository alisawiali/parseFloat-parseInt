/*
   -- - - -- - This Keyword
*/
console.clear();
let user = {
  name: "Imad",
  age: 36,
  sayHallo: function () {
    return this.age * 365;
  },
};

console.log(user.name);
console.log(user.sayHallo());

console.log("################");
let number = 30;
for (let i = 0; i <= number; i++) {
  if (number < i) {
    return number = Math.floor(Math.random() * 100);
  }
}

console.log(`Hooray! You got ${number}!`);

// ---------------------
