
console.clear()

function countDown(n) {
    const set = setInterval(function() {
         if (n > 0) {
         console.log(n--);
         } else {
         console.log("Go!");
             clearInterval(set);
         }
         }, 1000)
  }
  countDown(3)