// function neuData() {
//   return new Promise((resolve, reject) => {
//     const nmaes = ["Imad", "Ali", "Alisawi", ["Ali", "Alimasuri", ["Amer"]]];
//     // console.log(nmaes.length); // ==> 4
//     if (nmaes.length > 0) {
//       resolve(nmaes);
//     } else {
//       reject("Error User Not Found");
//     }
//   })

//     .then((data) => {
//       console.log(data);
//     })

//     .catch((result) => {
//       console.log(result);
//     });
// }
// neuData();

async function neuData() {
  let names = ["Imad"];
  if (names.length > 0) {
    return Promise.resolve(names);
  } else {
    return Promise.reject("Not Found The Arr");
  }
}
neuData()
  .then((test1) => {
    console.log(test1);
  })

  .catch((erro) => {
    console.log(erro);
  });
