/*
 - - -- Unterricht  ( #088 )
 #######      Check Attributes And Examples

 ------------------ DOM [check Attributes]
              1: Element.attributes
              2: Element.hasAttribute
              3: Element.hasAttributes
              4: Element.removeAttribute
*/

console.log(document.getElementsByTagName("p")[0].attributes);

let myPara = document.getElementsByTagName("p")[0];

btn = function () {
  if (myPara.hasAttribute("data-src")) {
    if ("data-src" === "") {
      myPara.removeAttribute("data-src");
    } else {
      myPara.setAttribute("data-src", "New-Data");
    }
  } else {
    console.log("Not Found");
  }
};
btn();

if (document.getElementsByTagName("div")[0].hasAttributes()) {
  console.log("has Attribute");
} else {
  console.log(" Div has Not Attribute");
}
