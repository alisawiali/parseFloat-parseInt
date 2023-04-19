let day = 3;
switch (day) {
    case 0:
        console.log("Montag");
        break;
    case 1:
        console.log("Dienstag");
        break;
    case 2:
        console.log("Mittwoch");
        break;
        default:{
            console.log("Unknown Day")
        }
}

//----------------------------
console.log("Switch Practic------------->")
let job = "Manger";
let salary ;

switch (job) {
    case "Manger":
    salary = 1000;
    console.log(`salary Is ==> ${salary}`);
    break;
    case "IT":
    salary = 2000;
    console.log(`salary Is ==> ${salary}`);
    break;
    default:
        salary = 1000;
        console.log(`ich bin mit dem ${salary} und als Verkäüfer zufriden`)
}