const myPromiess = new Promise((resultFunction, rejectFunction) => {
  let connent = true;
  if (connent) {
    resultFunction("Connention Result");
  } else {
    rejectFunction(Error("Erro !!!!"));
  }
});

myPromiess.then((resolveValue) => {
  console.log(`Cood ${resolveValue}`),
    (rejectValue) => {
      console.log(`Bad   ${rejectValue}`);
    };
});

// console.log(myPromiess);

// export function generte() {

// }
// const arr = [];

// const START = 15;
// const end = 100;
// for (let i = START; i < end; i++) {
//   arr.push(i ** 2);
// }

// const main = document.querySelector("main");
// const p = document.createElement("p");
// p.textContent = arr;
// main.appendChild(p);

// const btn = main.querySelector("#btn");
// console.log(btn);
// btn.addEventListener('click', evt => {

// })
