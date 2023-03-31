/* ----------------Map
-- Function Map
... Swap Cases
... Intverted Numbers
... Ignore Bollean Value
*/

let myfrinds = ['Omer', 'Amer', 'Alaa', 'Imad']
let myNumer = [1, 2, 3, 4, 5]
let newArray = []

// for (let i = 0; i < myNumer.length; i++) {
//     newArray.push(myNumer[i])
// }
//  console.log(newArray)

console.log('-----Map----')
let addself = myfrinds.map(e => {
  newArray.push(e)
  return newArray
})
console.log(newArray)

console.log('<------------- "aLMANSURI"--------------->')

let swappings = 'aLMANSURI'
let sawp = swappings
  .split('')
  .map(e => {
    return e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase()
  })
  .join('')
console.log(sawp)

console.log('<-------------Nagative--------------->')
let invertedNumber = [1, -10, 20, -15, 100, -30]
let nagativ = invertedNumber.map(e => {
  return -e //   if (e !== true) {  return -e } else {    return +e  }
})
console.log(nagativ)

console.log('<-------------IgnorNumber--------------->')
let ignorNumber = 'almanur234i91'
let ignor = ignorNumber
  .split('')
  .map(e => {
   return isNaN(parseInt(e))? e : '';;

  })
  .join('')
console.log(ignor)

