let myJson = '{ "username:": "Imad", "Age": 36 }';

let myObjects = JSON.parse(myJson);
console.log(myObjects); // json.parse(name) gibt object zurück
console.log(typeof myJson); // string

// staringfiy gibt string Zurück
const myobejct = { unsername: "Imad", herkunft: "Deutschland" };
const myJsonobject = JSON.stringify(myobejct);

console.log(myJsonobject);
console.log(typeof myJsonobject);
