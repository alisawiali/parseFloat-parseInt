// kleinetmöglich definition einer function.

// keword Function -  namen   (parameter)  {code block}
function myName () {
  console.log('hallo welt')
  const res = parseInt(2)
  console.log(res)
}
myName()

//parameter
console.log('-------')
let frust = 'mango'
function names (x) {
  let n = x * x
  if (true) {
    console.log('hi local', x / x)
  }
  console.log(n)
  let frust = 'Banana'
  console.log(frust)
}

names(2)
console.log('-------')
function calc(x){
    console.log(x+x)
    names(x)
    console.log('after nach func',x)
   
}
calc(3)