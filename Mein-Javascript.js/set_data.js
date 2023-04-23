 
 /*
  ---- Set Data Type
   ... Syntax To Store UniQui Values
   ... Coujnt Access Elements Index

   -- Properties
 ... sizr

 ++++ Methode
 -- add
 -- delete
 -- clear
 -- has

 */
 console.clear()
 let myData = [1,2,3,4,4,5,4,4,6,]
 let mySetData = new Set(myData).add(22).add("A")// mit .add fügen wir weite zu
 console.log(mySetData)

 console.log('size:',mySetData.size) // hier können wir nicht mit [] rein gehen
 console.log('undefind',mySetData[0])// hier gibt undefind zurück
 console.log('index:',myData[0]) // Aber mit dem Haupt ja können wir index holen

 // delete

 mySetData.delete("A") // Wir haben 22 gelöscht mit Methode (clear)
 console.log(mySetData)

 // has

console.log(mySetData.has("A"))