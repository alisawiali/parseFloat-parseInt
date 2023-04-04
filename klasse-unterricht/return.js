console.clear();

function creete(name) {
  const greeting = `hi, guten morgen ${name}`;
  return greeting;
}
let result = creete("Imad");

console.log(result);

console.log("##########----------------->");

function shopping(age, preference) {
  if (age < 18) {
 
  
    return "Sie sind leider unter der bedegungen ";
  }
  else if (preference === "shop") {
    return "Sara";
  }

  return "Sarturn";
}

console.log(shopping(10, "shop"));
