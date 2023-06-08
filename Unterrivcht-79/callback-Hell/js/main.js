console.log("Hallo");

export function makeItRed(e) {
  e.target.style.color = "red";
}
const btn = document.getElementById("btn");
btn.addEventListener("click", makeItRed);

export function imAcallBack() {
  console.log("Hallo callBack");
}
setTimeout(imAcallBack, 1000);

setTimeout(() => {
  console.log("Dowonload Photo From URL");
  setTimeout(() => {
    console.log("Resize Photo");
    setTimeout(() => {
      console.log("Show Photo");
      setTimeout(() => {
        function testSet() {
          let arr = [];
          for (let i = 0; i < 3; i++) {
            arr.push([i]);
          }
          return arr;
        }

        console.log(testSet());
      }, 1000);
    }, 1000);
  }, 1000);
}, 2000);
