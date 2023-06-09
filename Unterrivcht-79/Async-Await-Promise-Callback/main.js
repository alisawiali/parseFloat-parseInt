let url = "https://alisawiali.github.io/";
fetch(url)
  .then((test1) => {
    return test1.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((res) => {});
