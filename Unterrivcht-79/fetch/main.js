//  fetch

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((result) => {
    let myData = result.json();

    return myData;
  })
  .then((data) => {
    data.length = 10;
    return data;
  })
  .then((test) => {
    console.log(test);
  })
  .catch(() => {
    console.log(Error("Error test Not Found"));
  });
// const getDats = (ablic) => {
//   return new Promise((resolve, reject) => {
//     let myRquens = new XMLHttpRequest();
//     myRquens.onload = function () {
//       if (this.readyState == 4 && this.status === 200) {
//         resolve(JSON.parse(this.responseText));
//       }
//       reject(Error("false not found"));
//     };
//     myRquens.open("GET", ablic);
//     myRquens.send();
//   });
// };

// getDats("https://jsonplaceholder.typicode.com/todos/1")
//   .then((reult) => {
//     reult.length = 10;
//     return reult;
//   })
//   .then((es) => {
//     console.log(es);
//   })
//   .catch((rej) => {
//     console.log(rej);
//   });
