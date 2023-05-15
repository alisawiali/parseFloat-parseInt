"use strict";
console.log(Math.ceil(10.3));
console.clear();
const benutzer1 = {
    id: 1,
    benutzername: "Imad",
    email: ["tugrp@example.com", "tugrp@example.com", "tugrp@example.com"],
};
const benutzer2 = {
    id: 2,
    benutzername: "LeistunfGerät",
    email: ["tugrp@example.com", "tugrp@example.com", "tugrp@example.com"],
    alter: 30,
};
function zeigeBenutzerInfo(benuzter) {
    console.log(`${benuzter.benutzername} ${benuzter.email[2].substring(0, 1).toUpperCase() + benuzter.email[2]}`);
}
zeigeBenutzerInfo(benutzer1);
zeigeBenutzerInfo(benutzer2);
console.log("--------");
function showData(benuzter) {
    if (benuzter.alter) {
        return `${benuzter.benutzername} `;
    }
    else {
        return benutzer2;
    }
}
console.log(showData(benutzer2));
console.log("--------");
function syaHallo(name, age, salary) {
    return `${name} ${age} ${salary}`;
}
console.log("hallo", syaHallo("Imad", 30));
console.log("-------------");
