console.clear();

console.time("Hallo");
setTimeout(() => {
  console.log("ergebnis DurchLauf");

  setTimeout(() => {
    console.log("ergebnis DurchLauf");
    info = "Async Programieung macht spass";
    console.timeLog("collback Hell");
    setTimeout(() => {
      console.log({ info });
    }, 2 * 1000);
  }, 1 * 1000);
}, 3 * 1000);
