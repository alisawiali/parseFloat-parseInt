// document.getElementById("myFormHead").addEventListener("submit", formHead);

// function formHead(event) {
//   event.preventDefault();
// }
(async () => {
  const rawResponse = await fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ a: 1, b: "Textual content" }),
  });
  const content = await rawResponse.json();

  console.log(content);
})();
