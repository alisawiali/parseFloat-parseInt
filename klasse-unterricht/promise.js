// Promise ===> versprechen
console.clear();
console.log("Promise  .............");
function wait() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("gewatet");
      resolve("feritg");
      reject("Fehel Meldung");
    }, 1 * 1000);
  });
}
// let promise = wait();
// console.log(promise); // pending

wait()
  .then((one) => {
    console.log("das Erste ergebnis", one);
    return wait();
  })
  .then((two) => {
    console.log('"das zweite ergebnis', two);
    return wait();
  })
  .then((three) => {
    console.log('"das zweite ergebnis', three);
    wait();
  })
  .catch((cat) => {
    console.log(cat);
  })
  .finally(() => {
    console.log(".....Das letzte ergebnis!.");
  });
