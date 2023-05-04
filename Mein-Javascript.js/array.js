
// -----------------Properties  Eingenschaft ==> 
// Length -----------

folder = [];
console.log(`length of folder  `, folder.length);
folder[0] = "Text";
folder[1] = "main";
console.log(`length of folder `, folder.length);
// METHODE INDEXOF()
console.log("<---- METHODE INDEXOF()----------->")
let index = folder.indexOf("Text")
console.log('indexOf',index  )


// push() ----------- Am Ende ----------------------->
console.log("<----push() ----------- Am Ende---->")
folder.push(1,"one",3);
console.log(folder) // 1,"one", 3
console.log(folder.indexOf("Text")) // wenn text denn geben wir "" und wenn number denn geben wir number

 // unshift fügt am anfang -------------------------->
 console.log("<--- unshift fügt am anfang ----->")
 const unshiftP = folder.unshift("zero");
 console.log(folder) // zero
 // pop() das leste wird gelöscht ------------------->
 console.log("<--- pop() das leste wird gelöscht---->")
 let popl = folder.pop();
 console.log(folder) //3
 //  löscht das erste Elemnt   shift() ------------->
 console.log("<--- löscht das erste Elemnt   shift()---->")
 let schifttt = folder.shift();
 console.log(folder) // zero

 // reverse drhte alle werte um -------->
 console.log(" reverse drhte alle werte um  -------->")
 let reverses = folder;
 reverses.reverse()
 console.log(reverses)

 // concat()
 console.log("concat()--------->")
 let test1 = [ 1,2,3];
 let test2 = [ "imad","Ali"];
 let test3 = ["One", "Tow"];

 const conation = test1.concat(test2,test3)
console.log(conation[2])

