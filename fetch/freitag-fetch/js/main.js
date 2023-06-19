// const input = document.querySelector("input");
// input.addEventListener("change", () => {
//   input.textContent = "click me";
// });

// const url = "https://jsonplaceholder.typicode.com/photos/4";

// const palyLoad = {
//   userId: 1,
//   id: 4,
//   title: "accusamus beatae ad facilis cum similique qui sunt",
//   body: "Fido Loves teaching code",
// };

// const option = {
//   method: "PUT",
//   body: JSON.stringify(palyLoad),
//   headers: new Headers({
//     Accept: "*/*",
//     Authorization: "<KEY>",
//   }),
// };
// fetch(url, option)
//   .then((responsev) => console.log(responsev.status))
//   .then((err) => console.log(err));
// -------------------------------------------

customFetsch("https://reqres.in/api/users", "GET", "POST", {
  name: "Captions Annoumss",
});
function customFetsch(url, type, data) {
  if (type === "GET") {
    fetch(url, {
      method: type,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          console.log("HTTP reqerst seccessful");
        } else {
          throw Error(`Error ${res.status}`);
        }
        return res;
      })

      .then((res) => res.json())
      .then((test) => console.log(test))
      .catch((erro) => console.log(erro));
  }

  // ---------

  if (type === "POST" || type === "PUT") {
    fetch(url, {
      method: type,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    })
      .then((res) => {
        if (res.ok) {
          console.log("HTTP reqerst seccessful");
        } else {
          throw Error(`Error ${res.status}`);
        }
        return res;
      })

      .then((res) => res.json())
      .then((test) => console.log(test))
      .catch((erro) => console.log(erro));
  }
}

let domNod = {
  tag: "ul",
  attribut: { id: "ul-list" },
  childern: [],
};

const h = document.querySelector("h1");
domNod.childern.push("<p>list 4</p>");
h.appendChild(domNod);
