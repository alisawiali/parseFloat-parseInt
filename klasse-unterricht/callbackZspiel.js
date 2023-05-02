console.log(
  "--------------recursion  <-> العودية  -----------------------------"
);
console.clear();
function thema() {
  return fun("Alisawi");
}

const fun = function (x) {
  return "Imad " + x;
};

  const test = function (x) {
      let r = true
      if(r ===  true ){
          return thema()   ;
      }else{
          return fun()
      }

    };

console.log(test())


