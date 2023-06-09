const myResponsiv = new Promise((resolveFunc, rejectFun) => {
  let count = true;
  if (count) {
    resolveFunc("Cmmit is Right");
  } else {
    rejectFun("Commit is Wrong");
  }
});

const resultOne = (testOne) => console.log(testOne);
const resultTow = (testTow) => console.log(testTow);
myResponsiv.then(resultOne, resultTow);
//-------------------------
let myP = new Promise((test, rest) => {
  const arrName = ["Imad", "Alla", "Amer", "Ali"];
  if (arrName.length === 0) {
    test(arrName);
  } else {
    rest(Error("Number of arrName Is Not Fond , 4!"));
  }
});
myP
  .then((resultValue) => {
    resultValue.length = 1;
    console.log(resultValue);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The Opration is Done");
  });
// new Promise((mainOnw, Tow) => {
//   setTimeout(() => {
//     mainOnw("Done");
//   }, 1000);
// }).then((result) => {
//   console.log(result);
// });
// ----------------------------------------------
