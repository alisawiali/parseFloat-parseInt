console.clear()

console.log('###-----------------')

let namesS = ['Imad', 'Ali', 'alisawi']
let nam = 'Ali'
let found = false

for (let i = 0; i < namesS.length; i++) {
  let num = namesS[i]
  if (num.includes(nam)) {
    // nam ist da
    console.log('Ali ist hier', num)
    return true
  }
}
// handle not found
if (!found) {
  console.log(nam, 'nicht gefunden!')
}
