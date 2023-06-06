console.clear();
console.log(" Exsam am 11.5.2023");
const profileData = {
  firstName: "Imad",
  lastName: "Ahmed",
  age: 25,
  city: "Berlin",
  details() {
    return `${this.firstName}${this.lastName} and im ${this.age} years old and i lives in ${this.city}`;
  },
};

console.log(profileData.details());

function wordConverter(words, suffix) {
  const sum = words.map((word) => {
    return word + suffix;
  });

  return sum;
}
let wordes = ["smart", "kind", "sweet", "small", "clear"];
let fix = "er";

let arr = wordConverter(wordes, fix);
console.log(arr);
//------------------------

function calculateHours(hours) {
  let result = 0;
  for (let i = 0; i < hours.length; i++) {
    const elementStart = hours[i].start;
    const elementEnd = hours[i].end;
    const sum = elementEnd - elementStart;
    result += sum;
  }
  return result;
}

const hourTracking = [
  { day: "Monday", start: 8, end: 17 },
  { day: "Tuesday", start: 9, end: 15 },
  { day: "Wednesday", start: 10, end: 18 },
  { day: "Thursday", start: 7, end: 14 },
  { day: "Friday", start: 6, end: 12 },
];
console.log(calculateHours(hourTracking));

function validPin(pin) {
  return pin.length === isNaN;
}
console.log(validPin("1234"));
