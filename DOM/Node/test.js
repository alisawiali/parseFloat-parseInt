const mydiv = document.getElementById("main");

console.log(mydiv.childNodes[1].nodeName);
console.log(mydiv.childNodes[0].tagName);
//gibt die Name zurück und wenn nicht gibt undfinde zurück
console.log(mydiv.childNodes[1].firstChild.nodeValue);
console.log(mydiv.childNodes[1].childNodes[0]);
// gibt die Value zurück und wenn nicht git null zurück

console.log(mydiv.childNodes[5].nodeType);
