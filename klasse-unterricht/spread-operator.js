console.clear()
const euroCountries = ['Germany', 'France']
const asianCountries = ['Japan', 'Korea']
euroCountries.push(...asianCountries)
console.log('Aufgabe 1: ', euroCountries)

const euroCities = ['Berlin', 'Paris']
const asiaCities = ['Tokyo', 'Seoul']
const worldCities = euroCities.concat(asiaCities)
// const worldCities = [...euroCities, ...asiaCities];
console.log('Aufgabe 1-A : ------------------------------------------', worldCities)
// 2.
console.log()
const asiaCitiesCopy = [...asiaCities]
console.log('Aufgabe 2 :------------------------------------------------- ', asiaCitiesCopy)
// 3.
const array = [1, 2, 60, 5, 89, 8]
function findLargestNumber(arr) {
    return Math.max(...arr)
}
console.log('Aufgabe  3------------------------------------------------- :', findLargestNumber(array))
// same as
// arrow function mit impliziten return
// const findeLargestNumber = (arr) => Math.max(...arr)
// 4.
function findSmallestNumber(arr) {
    return Math.min(...arr)
}
console.log('Aufgabe  4------------------------------------------------- :', findSmallestNumber(array))
// 5.
const person = { name: 'John' }
const job = { role: 'Teacher' }
// 5.1.
clonePerson = { ...person }
console.log('Aufgabe  5-1------------------------------------------------- :', clonePerson)
// 5.2.
const employee = { ...person, ...job }
console.log('Aufgabe  5-2------------------------------------------------- :', employee)
// 5.3.
job.role = 'Plumber'
console.log(job)
console.log(employee)
// 6.
function isWhole(a, b, c, d) {
    let average = (a + b + c + d) / 4
    return Number.isInteger(average)
}
console.log(isWhole(1, 2, 3, 4)) // false
console.log(isWhole(1, 2, 3, 6)) // True
