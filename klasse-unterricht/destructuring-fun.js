console.log();
console.log("-------------Destructuring 1-------------------");
const { a, b, c } = { a: "One A", b: "Tow B", c: "Three c" };
console.log(a, b + a, c[0], c.indexOf("c"));

const useObject = {
  username: "Test",
  password: "pass",
  status: "active",
  avartarUrl: "/avatar.jgp",
  o: {
    copyOrRef: "Testing",
  },
};
//                            ...rest
const { username: userNams, ...hiddensRest } = useObject;
hiddensRest.password = "chanllge";

console.log(useObject);
console.log("ergebnis", hiddensRest);

// rest parameter innerhalb destructuring
console.log("// rest parameter innerhalb destructuring  --------");
const userObj = {
  username: "icke",
  password: "pass",
  status: "active",
  avartarUrl: "./avatar.jpg",
  o: { copyOrRef: "ref" },
};

const { username: userName, ...hiddenObjectProperties } = userObj;
hiddenObjectProperties.password = "changed";
hiddenObjectProperties.o.copyOrRef = "changed";
console.log("user original", userObj);
console.log("hidden object", userName, hiddenObjectProperties);

const arr = ["index0", "index1", 1, 2, 3];
const [index0, index1, , x, y] = arr;
console.log(index0, index1, x + y);

const [, i1, , ...restArrayValues] = ["index0", "index1", 1, 2, 3];
console.log(i1, restArrayValues);

// rest parameter als funktionsparameter
function restParam({ username, ...restProps }) {
  console.log(
    "ergebnis rest parameter als funktionsparameter ",
    username,
    restProps
  );
}

restParam(userObj);
console.clear();
const city = {
  streets: {
    charlottenburg: ["Schloßstr.", "Heerstr.", "Kantstr."],
    kreuzberg: ["Bergmannstr.", "Wienerstr.", "Temeplehofer Ufer"],
  },
  cars: ["B-1", "B-2", "B-3"],
  park: {
    tiergarten: {
      birds: ["Amsel", "Drossel", "Fink", "Star"],
    },
  },
};




function  test ({streets:{charlottenburg:[,,k],kreuzberg:[s,,]},cars:[a,,,],park:{tiergarten:{birds:[,,,f,]}}}){
  //console.log(a,s,k,b)
   console.log(` Ich wohne im ${k} fast Mitte Berlin auf die Strass ${s} und  ich hab ein schönes Auto kenenzeichen und sie fängt mit ${a}${f} `)
}
test(city)



const theNmae ={
  name: "Imad",
  lastName:"Ali",
  job:{
    firstJob:["IT","Busfahrer"],
    towJob:"Jornalist"
  }
}


function funTheName({name,lastName,job:{firstJob:[,a]}} =theNmae ){
  console.log(`${name} ${lastName} ${a}`)
}
funTheName(theNmae)







let chosen = 3;
let myFrinds = [
    { title: "Osama", age: 39, available: true, skills: ["Html", "Css"] },
    { title: "Ahmed", age: 36, available: false, skills: ["Python", "Django"] },
    { title: "Sayed", age: 31, available: true, skills: ["PHP", "Laravel"] }
];


let {
  title: t,
  age,
  available,
  skills: [, lastSkill],
} = myFrinds[chosen - 1];

console.log(t)
console.log(a)
console.log(available ? available:  " Not available")
console.log(lastSkill)
