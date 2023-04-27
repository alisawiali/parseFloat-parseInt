console.clear();
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

const myTestThree = (prop,callBack) => {
  setTimeout(() => {
    posts.push(prop);
    callBack()
  }, 2000);
};


myTestThree({ title: "Post 2", content: "Australien" },myPost);
