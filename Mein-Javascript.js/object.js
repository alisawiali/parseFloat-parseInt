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

console.log("#######-------->");
let array = new Object({
  name: "Imad",
  age: 23,
  skills: ["IT", "Paython", "C++"],
  availabel: false,
  land: {
    firstLand: "Iraq",
    secounfLand: "Deutland",
    telefoun: {
      one: 123345908272,
      tow: 7654321,
    },
  },

  sayHallo: function () {
    if (this.availabel !== true) {
      return " Imad Alisawi";
    } else {
      return "Versuchen Sie es später bitte";
    }
  },
});
console.log(array.age);
console.log("Ich Arbeite ",array.skills[2],"als Programiere sprache  und " + `ich heiße ${array.name}`
);
console.log(
  array.land.firstLand +
    `und mein TeleNummner im Ausland ist  ${array.land.telefoun.one}`
);
console.log(array["age"]);
console.log(array["land"]["firstLand"]);

console.log("########-------########");
console.clear()
console.log('-------------This keyword')
let users ={
    age :36,
    ageFunction :function(){
        return users.age * 2 + " Days "
    }
}
console.log(users.age)
console.log(users.ageFunction())

let job = Object.create(users)
job.age = 100;


console.log(job.age)
console.log(job.ageFunction())
console.log(job)


console.log('####################')
let lehrer = [
  {
    name: "Imad",
    age: 33,
  },
  {
    name: "Amer",
    age: 40,
  },
];


 function main(){
  for (let i = 0; i < lehrer.length; i++) {
    //  let person = lehrer[i]
    //  console.log(`${person.name} ist ${person.age}`) 
      return`${lehrer[i].name} ist ${lehrer[i].age}`;
  }
  
 }
 main()