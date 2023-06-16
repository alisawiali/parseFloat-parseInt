export function printData(booksData) {
  const header = document.querySelector("#header h1");
  const content = document.getElementById("content");
  const select = document.querySelector("select");

  booksData.forEach((element) => {
    const option = document.createElement("option");
    option.textContent = element.name;
    // option.value = element.name;
    select.appendChild(option);
  });
  select.addEventListener("change", (evt) => {
    header.textContent = evt.target.value;
    //   header.textContent = select.value; ====> seleber wie oben
  });
}
