console.clear();

function wait() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("gewatet");
      resolve("feritg");
      reject("Fehel Meldung");
    }, 2 * 1000);
  });
}

async function run() {
  const result1 = await wait();
  const result2 = await wait();
  const result3 = await wait();
  console.log({ result1, result2, result3 });
}
run();

//

async function test() {
  return "Erledigt";
}
async function run2() {
  const result = await test();
  console.log(result);
}
run2();
