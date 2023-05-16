console.clear();
/*
     - - document.body
      - - document.links

*/

const mybody = document.getElementById("show");

// mybody.innerText = document.body.innerText;

if (document.body.innerText.indexOf("XberlinX") > -1) {
  console.log("This Element Is Exist");
} else {
  console.log("leider gibt es nicht");
}

mybody.innerText = document.links.length;
