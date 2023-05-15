console.clear();

const readline = require("readline");

const ri = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});
ri.question("was ist dein name\n", (input) => {
  console.log("mein name ist " + input)
  ri.question("was ist dein Alter?.\n", (input)=>{
    console.log("mein alter is " + input)
  
    ri.close()
  })

});
// console.log(readline)
