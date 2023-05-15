console.log(Math.ceil(10.3));
console.clear();
interface Benutzer {
  id: number;
  benutzername: string;
  email: string[];
  alter?: number;
}
const benutzer1: Benutzer = {
  id: 1,
  benutzername: "Imad",
  email: ["tugrp@example.com", "tugrp@example.com", "tugrp@example.com"],
};
const benutzer2: Benutzer = {
  id: 2,
  benutzername: "LeistunfGerät",
  email: ["tugrp@example.com", "tugrp@example.com", "tugrp@example.com"],
  alter: 30,
};

function zeigeBenutzerInfo(benuzter: Benutzer) {
  console.log(
    `${benuzter.benutzername} ${
      benuzter.email[2].substring(0, 1).toUpperCase() + benuzter.email[2]
    }`
  );
}
zeigeBenutzerInfo(benutzer1);
zeigeBenutzerInfo(benutzer2);

console.log("--------");
function showData(benuzter: Benutzer) {
  if (benuzter.alter) {
    return `${benuzter.benutzername} `;
  } else {
    return benutzer2;
  }
}

console.log(showData(benutzer2));

console.log("--------");
function syaHallo(name: string, age: number, salary?: number) {
  return `${name} ${age} ${salary}`;
}
console.log("hallo", syaHallo("Imad", 30));
console.log("-------------");
