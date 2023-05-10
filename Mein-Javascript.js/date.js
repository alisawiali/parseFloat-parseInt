
console.clear()

let dataNow = new Date()

console.log(dataNow)
console.log(Date.now()) // 1000 = 1 secound

let secound = Date.now() / 1000  // of secound
console.log("Secound: ",secound)


let minuten = secound / 60 // Number of  minuten
console.log("Minuten: ",minuten)


let hours = minuten / 60 // Hours of  hours
console.log("Hours: ",hours)


let days = hours / 24 // Hours of  days
console.log("days: ",days)

let jahr = days / 365 // Hours of  jahr
console.log("days: ",jahr)

console.log('#######--------------------')

const dateNow = new Date()
const brithday = new Date('April 28, 86')
const dateDiffernz = dataNow - brithday   

console.log(dataNow)
//                       Skunden  Minuten   Stunden  Days  Jahr
console.log(dateDiffernz / 1000 /    60     / 60     / 24 / 365)

console.log(dataNow.getDate()) // heute ist 9.5.23
console.log(dataNow.getTime()) // Skunden von anfang bis jetzt
console.log(dataNow.getFullYear()) // Zeight das Jahr 
console.log(dataNow.getMonth()) // 
console.log(dataNow.getDay()) // Heute ist dinstag und a den englich klender 2
console.log(dataNow.getHours()) // Hours 17:22 jetzt
console.log(dataNow.getMinutes()) // 22
console.log(dataNow.getSeconds()) // 56


console.log("#################----Zeit-----".repeat(1))
const newDates = new Date()
console.log(newDates)
newDates.setTime(1000)
console.log(newDates)
console.log("#################----Tag-----".repeat(1))

newDates.setDate(22)
console.log(newDates)

console.log("#################- Jahr--------".repeat(1))
newDates.setFullYear(2020,3)
console.log(newDates)


console.log("#################---Monat-----".repeat(1))
newDates.setMonth(1)
console.log(newDates)

console.log("#################---Minute-----".repeat(1))
newDates.setMinutes(12)
console.log(newDates)

console.log("#################---Days-----".repeat(1))
newDates.setSeconds(50)
console.log(newDates)

console.log("#################---Days-----".repeat(1))
newDates.setSeconds(50)
console.log(newDates)