console.log("###########<---------------ONE --------------->#########");
const student = [
  { name: "Imad", nachName: "Ali" },
  { name: "ALaa", nachName: "ALisawi" },
];
//                object
function addYear(parmeter) {
  parmeter.year = 2023;
}
student.forEach(addYear);
console.log(student);

console.log(
  "###########<--------------- zwischen One and Tow () --------------->#########"
);

function makeProject(eleArr) {
  const drink = [];
  const salat = [];
  for (let index = 0; index < eleArr.length; index++) {
    const element = eleArr[index];
    if (element.type === "beverage") {
      drink.push(element);
    } else if (element.type === "vegetra") {
      salat.push(eleArr);
    }
  }
  console.log(drink, salat);
}

function shopping(shop) {
  const articel = [
    { type: "beverage", name: "Fanta" },
    { type: "vegetra", name: "Tomato" },
    { type: "vegetra", name: "Apergena" },
  ];
  shop(articel);
}

shopping(makeProject);

console.log("###########<--------------- TOW  DHL THema--------------->#########");

// DHL

function packet1EinLieferung(id, callback, callback2) {
  setTimeout(function () {
    console.log(`paket ${id} eingeliefert`);
    callback(id, callback2);
  }, 1000);
}
function packet1Transport(id, callback) {
  setTimeout(function () {
    console.log(`paket ${id} Transporttiert`);
    callback(id);
  }, 2000);
}
function paket1ZUstellung(id) {
  setTimeout(function () {
    console.log(`paket ${id} ist da`);
  }, 500);
}

packet1EinLieferung(1, packet1Transport, paket1ZUstellung);



