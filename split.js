/*

Methode Split
nimmt die weg

 ===> ""
 ===> ''
 ===> \\
 ===>//
*/ 

const testSplit = "Alisawi | Imad | Ali";

console.log(testSplit.split("|"));// nimmt die Zeichen weg |
console.log(testSplit.split(" ",3)) // [ 'A', 'l', 'i' ]