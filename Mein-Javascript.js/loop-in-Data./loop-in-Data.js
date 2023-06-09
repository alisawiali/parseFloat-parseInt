let myRequest = new XMLHttpRequest();
let e = document.createElement("h1");
e.innerHTML = "Hello World";
document.body.appendChild(e);

myRequest.open("GET", "https://jsonplaceholder.typicode.com/users/1");
myRequest.send();
console.log(myRequest);
myRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    let e = document.createElement("h1");

    e.innerHTML = this.responseText;
    document.body.appendChild(e);
    console.log(e);
  }
};
