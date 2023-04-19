

const today = "ThurDay";
const todays = "Mittwoch";

if (today.toLowerCase() === "thUrday" || todays.toLowerCase() === "Mittwoch") {
    console.log("hallo today is " + todays)
} else if (today.charAt("T") === "T") {
    console.log("hallo  is " + today)
} else if (today.length === 6 || today.length !== 7) {
    console.log("today besteht mit 7 Buchstaben")
} else if (today.slice(0, 4) === "Thur") {
    console.log("Thur gibt  es in  dem Wort")
    if (today.slice(0, 7) === "ThurDay") {
        console.log("Der Tag gibt in der Woche")
    } else {
        console.log("Leider gibt es nicht")
    }
}
else {
    console.log("hallo today is  not hollday")
}

console.log("<-----------  Null /  undefined --------->")

let r = undefined; // null 
if (r !== null &&
    r == undefined &&
    r !== "t" &&
    r !== "w") {
    console.log("hallo Imad")
}