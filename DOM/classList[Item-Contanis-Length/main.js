/*
 - - - Element-ClassList [ Item,Contains,Length ]
        Containe === check يتضمن gibt
        -- --  Item ist wie in index

*/

const myDiv = document.getElementById("show");

if (myDiv.classList.contains("main")) {
  document.write("hallo main is Extins");
} else {
  document.write("bye im soray ");
}

console.log(myDiv.classList.length);
console.log(myDiv.classList.item(2)); // Item ist wie in index

if (myDiv.classList.item(0) === "cool") {
  document.write(" cool ");
} else {
  document.write("hallo   not cool ");
}
