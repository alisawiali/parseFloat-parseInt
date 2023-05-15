"use strict";
console.clear();
const Kids = 15;
const Adults = 16;
const Children = 17;
const Infants = 18;
const AdultsAndKids = 19;
const AdultsAndChildren = 20;
var Level1;
(function (Level1) {
    Level1[Level1["Kids"] = 15] = "Kids";
    Level1[Level1["Adults"] = 16] = "Adults";
    Level1[Level1["Children"] = 17] = "Children";
    Level1[Level1["Infants"] = 18] = "Infants";
    Level1[Level1["AdultsAndKids"] = 19] = "AdultsAndKids";
    Level1[Level1["AdultsAndChildren"] = 20] = "AdultsAndChildren";
})(Level1 || (Level1 = {}));
const sum = "Esay";
function result() {
    if (sum === "Esay") {
        console.log(` The Level Is ${sum} And Number is ${Level1.Adults}`);
    }
}
result();
