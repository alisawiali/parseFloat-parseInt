console.clear();

function testingArr() {
  console.log("hallo welt");
}

const button = {
  click: function (callback) {
    callback();
  },
};
testingArr();
button.click(testingArr);

function myZweiCaollback(callbac1, callback2) {
  callbac1(1);
  callback2(100);
}

// Übung zum callback
// 1. Button click Simulation - Erstelle ein button Obejkt und hänge eine click Methode an, welche einen callback entgegennimmt und diesen auf click ausführt
// 2. Zustandsübermittlung einer Funktion - Erstelle eine Funktion und übergebe zwei Callbacks, einen für den Start und einen für das Ende der Ausführung
// 3. Helfer-Funktion (Callback) - Wähle eine array Methode, die eine Helfer-Funktion entegennimmt und ändere die Werte

function test(n) {
  //   // toString()
  //   let str = n.toString();
  //   // to Array
  //   let arr = str.split("");

  //   // All Eleemnt To Number

  //   arr = arr.map((x) => parseInt(x));

  //   arr = arr.reverse()

  //return n.toString().split("").map((x)=> parseInt(x)).reverse()
  let str = n.toString();
  let emptyArray = [];
  for (let i = 0; i < str.length; i++) {
    emptyArray.push(+str[i]);
  }
  let emptyRevers = emptyArray.reverse()
  return emptyArray
}
console.log(test(6383685138));
console.log(test(6383));

//-------------------------------------

class User{
  constructor(name,email){
    this.name = name;
    this.email = email;
  }
  sayHallo(){
    return `Hallo ${this.name} in Berlin`
  }
  get Shaow(){
    return `mein firstName ist ${this.name}  und mein email ist ${this.email}`
  }

  changeName(newName){
    this.name = newName;
  }

  set changEmail(newEmail){
    this.email = newEmail
  }
}

const myUserTest = new User("Imad","@Alisawi")
console.log(myUserTest)
console.log(myUserTest.Shaow)
myUserTest.changeName("Ali")
console.log(myUserTest.name)
console.log(myUserTest.Shaow)


myUserTest.changEmail = "oooo@gmail.com"
console.log(myUserTest.email)
console.log(myUserTest.Shaow)

let na= "louca"
if(na !== "louca"){
  console.log( "Your are nice")
}else{
  console.log( "Ich Imad")
}


