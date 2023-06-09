//  xmlhttprequest Darf die Info austauschen zwischen server und

// const myrequsert = new XMLHttpRequest();
// myrequsert.open("GET", "http://127.0.0.1:5501", true);
// myrequsert.send();

const getData = (Aplic) => {
  return new Promise((resolve, reject) => {
    let myResp = new XMLHttpRequest();
    myResp.onload = function () {
      if (this.readyState === 4 && this.status === 200) {
        resolve("http://127.0.0.1:5501/Unterrivcht-79/Promise-XHR/index.html");
      } else {
        reject(Error("Not data Fond"));
      }
    };

    myResp.open("GET", Aplic);
    myResp.send();
  });
};

getData("http://127.0.0.1:5501/Unterrivcht-79/Promise-XHR/index.html")
  .then((result) => {
    result;
  })
  .then((test) => {
    console.log(test);
  })
  .catch((red) => {
    console.log(red);
  });
//  "http://127.0.0.1:5501/Unterrivcht-79/Promise-XHR/index.html"

/*
      let isData = JSON.parse(this.responseText);
        for (let i = 0; i < isData.length; i++) {
          let div = document.createElement("div");
          let reqName = document.createElement(isData[i].name);
          div.appendChild(reqName);
          document.body.appendChild(div);
        } */
