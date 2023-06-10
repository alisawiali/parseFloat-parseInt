// console.log("hi wait Javascript ");

const MyPromise = new Promise((resolve, reject) => {
  let arr = [];
  setTimeout(() => {
    // resolve("Iam The Cood Promise ");
    reject(Error("Ima The Bad Promise"));
  }, 2000);
});

async function myData() {
  console.log("Befor Promise");
  try {
    console.log(await MyPromise);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("I am the Fan");
  }
}
myData();
