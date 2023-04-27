console.clear();
console.log("promises ===>  Verschbrechung وعود")
const posts = [
  { title: "Post 1", content: "Deutschland" },
  { title: "Post 2", content: "Iraq" },
];

const myPost = () => {
  setTimeout(() => {
    let output = "";
    posts.forEach((one, tow) => {
      output += `<li> Ich habe zwei famlie in:  ${one.content}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
};

const myTestThree = (prop) => {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            posts.push(prop);
            const done = false;
            if(done){
                resolve()
            }else{
               reject('....error')
            }
          }, 2000);
    })

};


myTestThree({ title: "Post 2", content: "Australien" }).then(myPost).catch((err)=>{
    console.log(err)
});
// .catch((err)=>{console.log(err)}); hier nimmmt die err weg