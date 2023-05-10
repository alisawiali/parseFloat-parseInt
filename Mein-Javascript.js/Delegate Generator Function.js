function* prope(){
   test: 1;
   test:2;

}

function* sum(){
    one:3;
    one:4;
}

function* calc(){
    test*  prope()
    one* sum()
}

let result = calc()
console.log(result)