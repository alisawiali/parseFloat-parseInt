let myThem = function () {
  const myFirstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hallo Promise One");
    }, 1000);
  });

  const mySecoundPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Hallo Promise secound");
    }, 2000);
  });

  const myThreePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hallo Promise Three");
    }, 3000);
  });
  Promise.allSettled([myFirstPromise, mySecoundPromise, myThreePromise])
    .then((testOne) => {
      console.log(testOne);
    })
    .then((resultFeheler) => {
      // Zeight wo die Fehler gibt
      console.log(resultFeheler);
    })
    .catch((falses) => {
      // Das catch nimmmt rote color weg und setzt es als string um
      console.log(falses);
    });
};

myThem();
//   Promise.allSettled ==> Zeight als array oder Drück als array
//   Promise.all === > drückt als string aus
//  Promis.race ==> Das nimmt absolut nur ein ergebnis entweder (resolve oder "rejected")
