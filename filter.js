/*
 - - - - Fillter 

*/
console.clear()

let names = ['Imad', 'Ali', 'Omer', 'Osama', 'Imam']
let number = [1, 2, 3, 5, 6]

let myFreund = names.map

let addfilter = names.filter(e => {
  return e.startsWith('s') ? true : false
})
console.log(addfilter)

let addfilters = number.filter(e => {
  return e % 2 === 0 ? true : false
})
console.log(addfilters)

let sum = 'ali alisawil lebt in Bagdad'

let res = sum
  .split(' ')
  .filter(e => {
    return e.length <= 2
  })
  .join(' ')

console.log(res)

console.log('###-----------------')
console.log('###-----------------')
let nnames = ['Imad', 'Ali', 'alisawi']
let nam = 'Ali'
let ergebnis = true;

for (let i = 0; i < nnames.length; i++) {
  let num = nnames[i]
  if (num.includes(nam)) {
    console.log('Ali ist hier', num + i)
    return ergebnis
  }
}
