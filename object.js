/*
- - - Object 
  ... Intro and What Is object
  ... Testing 
*/
console.clear();
let user = {
  // Properties  =>    ملكيات
  name: "Ali",
  theAge: 33,
  job: "Developer",
  // Methode
  sayHallo: function () {
    return `Hallo  ich heiße  ${user.name}  ich bin ${
      user.theAge
    }  jahre alt und Arbeite als  ${user.job.slice()} in Berlin`;
  },
};
console.log(user.name);
console.log(user.theAge);
console.log(user.sayHallo());

console.log("---------------Notation [Array]-------------------------");

let myVar = "country";
let namees = {
  firstName: ["Imad", "Omer", "Ali", [1, 2, 3]],
  große: 174 + "cm",
  // "country of" : 'Deutschland',
  country: "Deutschland",
};

console.table(namees.firstName[3][1]);
//console.table(namees["country of"])
console.log(namees.myVar); // undefiend
console.log(namees[myVar]); // Deutschland