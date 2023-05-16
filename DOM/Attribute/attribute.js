/*

 - -  getattribute   => ينسب
    - -  setattribute   => يتم تعديل صفة
    - -  removeattribute => يتم حذف صفة
*/

const myImg = document.querySelector("img");
if (myImg.hasAttribute("alt")) {
  if (myImg.alt === "") {
    myImg.src = "https://placehold.it/300/ddd";
    myImg.title = "Berlin";
    myImg.setAttribute("alt", "Default Alternate Text");
  } else {
    myImg.removeAttribute("alt");
  }
} else {
  myImg.src = "https://placehold.it/200/ddd";
}
