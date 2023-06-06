const h1 = document.querySelector("h1");
console.log(h1);

const myli = document.querySelector(".list li");
//  class fügen
myli.className = "Parentes imad testing";

//  remove
myli.classList.remove("testing", "imad");

//  Toggle

// img fügen
// const img = document.querySelector("img");
// const img2 = document.createElement("img");
// img.src = "./img/abu-dhabi-bmw-car-competition-4568863.jpeg";
// img2.src = "./img/asphalt-barbaric-car-color-8552238.jpeg";
// const main = document.querySelector("main");
// main.prepend(img);
// main.append(img2);
//main.append(img, img2);
//  prepend      ====>  fügt das element vorne
// append        ====>  am Ende das element fügen  √

function cerateImages(src, title) {
  // Bild erzogen
  const imge = document.createElement("img");
  // Bild-Eigenschaften setzen
  imge.src = src;
  imge.title = title;
  //  Bild zurückgeben
  return imge;
}

let imgeOne = "./img/asphalt-barbaric-car-color-8552238.jpeg";
let imgeTow = "./img/abu-dhabi-bmw-car-competition-4568863.jpeg";

//
let imge1 = cerateImages(imgeOne, "Auto renne");
let img2 = cerateImages(imgeTow, "Wald");

// renderImages Element
function renderImages(...images) {
  const main = document.querySelector("main");
  main.append(...images);
}

function cerateLink() {
  const link = document.createElement("a");
  link.href = "https://onedrive.live.com/";
  link.target = "_blank";
  link.innerHTML = "Hallo zu <strin> Google</strin>";
  return link;
}

//
renderImages(img2, imge1);
//
