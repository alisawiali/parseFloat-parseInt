const mydiv = document.getElementById("main");
console.log(mydiv.childElementCount); // rechnet nur die Element
console.log(mydiv.children); // rechnet die Kindern
console.log(mydiv.children[0]); // gibt das erste Kind zurück
//console.log((mydiv.children[0].textContent = "hallo welt"));
console.log((mydiv.children[1].classList = "Parent-one"));
console.log(mydiv.children[1].className);

console.log(mydiv.childNodes.length);
console.log(mydiv.childNodes);

console.log(mydiv.firstChild); // Erst child
console.log(mydiv.firstElementChild); // bringt das Erst Element
console.log(mydiv.lastElementChild); // bringt das laete Element
console.log(mydiv.lastChild);
