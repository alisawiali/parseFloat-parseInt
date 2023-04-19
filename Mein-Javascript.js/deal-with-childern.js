/*
 ---- DOM --- [ Deal With childerns];
 ---- Childern
 ---- ChildNodes
 ---- firstChild
 ---- lastCild
 ---- firstElementCild
 ---- lastElementCild
*/


let myElement = document.querySelector('div')
console.log(myElement.childNodes) // (7) [text, p, text, span, text, comment, text]
console.log(myElement.children[0]) //  <p>hallo Paragraph</p>  ===> Element 0
console.log(myElement.children[1]) // <span>hallo Span</span>  ===> Element 1  und und
//                                  0 , 1
console.log(myElement.children) //[ p, span]



// -----------------------------------------
console.log(myElement.childNodes[0]) // hallo div
console.log(myElement.firstChild) // hallo div
// -----------------------------------------

console.log(myElement.lastChild) // hallo
// -----------------------------------------

console.log(myElement.firstElementChild) // <p> </p>
// -----------------------------------------
console.log(myElement.lastElementChild.innerHTML.toUpperCase())// <span>Hallo span</span>