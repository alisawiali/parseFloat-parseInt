// // const url = "https://api.breakingbadquotes.xyz/v1/quotes/5";
// // const respn = await fetch(url);
// // const data = await respn.json();
// // console.log(data);
// // const url = 'http://localhost:8092'; // for local testing only
// // https://restcountries.com/v3.1/region/europe
// -----------------------------------------------
// async function get() {
//   const url = await fetch("https://www.anapioficeandfire.com/api/books");
//   const data = await url.json();
//   console.log(data);
//   const span = document.createElement("span");
//   span.innerHTML = `<h1>${data[0].name}</h1>
//     ${data[0].publisher}
//     <br>
//     ${data[0].authors}
//   `;

//   // map function  für data[names]

//   // select Refernu
//   const actorSelect = document.getElementById("actor");
//   actorSelect.innerHTML = `    <select>
//   ${data.map((ele) => `<option>${ele.name}</option>`)}
//   </select>`;

//   document.body.appendChild(span);
// }
// get();

import { printData } from "./main.js";
const url = "https://www.anapioficeandfire.com/api/books";
async function getH() {
  const responsv = await fetch(url);
  const booksData = await responsv.json();
  //   console.log(booksData);
  printData(booksData);
}
getH();
