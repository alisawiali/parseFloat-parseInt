console.clear();
/*
   - -  document.title
    - - document.images
     - - document.forms
      - - document.body

*/
const myElement = document.getElementById("show");
myElement.innerHTML = document.title;

// Find Images
// Images Array Length
myElement.innerHTML = document.images.length;
for (let i = 0; i < document.images.length; i++) {
  document.write(document.images[i].src + "<br>");
}

const myform = document.getElementById("form");
// myform.innerHTML = document.forms.length;
//myform.innerHTML = document.forms[0].x1.type; // text
// myform.innerHTML = document.forms[1].z1.type; passsword

myform.innerHTML = document.forms[0].x1.value = "Imad";
