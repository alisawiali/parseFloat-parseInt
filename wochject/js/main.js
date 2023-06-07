const head = document.querySelector("header");
head.style.height = "200px";

head.style.background = "#ccc";
head.style.borderRadius = "10px";
head.style.border = "2px solid red";
head.style.margin = "0 auto";
head.style.padding = "10px";
head.style.textAlign = "center";
const h1 = document.createElement("h1");
h1.style.fontSize = "50px";
h1.style.color = "red";
h1.innerText = "Ich bin Berliner";
head.appendChild(h1);

// const li = document.createElement("li");

setTimeout(() => {
  const section = document.querySelector("section");

  section.innerText = "Charlttenburg";
  section.style.height = "200px";
  section.style.color = "#fff";
  section.style.fontSize = "2em";
  section.style.background = "#333";
  section.style.border = "5px solid blue";
  section.style.margin = "20px auto";
  section.style.padding = "10px";
  section.style.borderRadius = "10px";
  section.style.textAlign = "center";
}, 2000);

setTimeout(() => {
  const main = document.querySelector("main");

  main.innerText = "New-wesend";
  main.style.height = "200px";
  main.style.color = "#000";
  main.style.fontSize = "2em";
  main.style.background = "#eee";
  main.style.border = "7px solid #adad";
  main.style.margin = "20px auto";
  main.style.padding = "10px";
  main.style.borderRadius = "10px";
  main.style.textAlign = "center";

  head.innerText = "Freut uns, dass du mit uns arebitest";
}, 3000);

const rest = {
  username: "John",
  role: "Admin",
  avater: "../img/96140976.jpeg",
};

function getAdmin(username) {
  const adminIds = {
    John: "987654321xxxx",
    stven: "6737357272cccc",
    mMten: "4267261832yyyy",
  };
  for (const name in adminIds) {
    if (name == username) {
      return adminIds[name];
    }
  }
  return "No ID found";
}

setTimeout(() => {
  head.innerText = `${rest.username.toLowerCase()}`;
  if (rest.role === "Admin") {
    setTimeout(() => {
      console.log(getAdmin(rest.username));
      head.innerText = `${rest.username} ID:    ${getAdmin(rest.username)}`;
    }, 4000);
  }
}, 1000);
//
//
//------------------------
