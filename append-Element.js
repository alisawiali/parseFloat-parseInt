/*

- - - - -     Create And Append Elements
                       
                 DOM [ Greate Elements]

               1: createElement
               2: createComment
               3: createTextNode
               4: createAttribute
               5:appendChild

 */


function addMain(n) {
    
  let mydivs = document.createElement("div");
  let myHThree = document.createElement("h3");
  let myP = document.createElement("h5");

  let myText = document.createTextNode(`BMW Ausstellung `.toUpperCase());
  let myPaText = document.createTextNode(`Hallo welt in Berlin ${n}  `);

  // Append myText in h3
  myHThree.appendChild(myText);
  myP.appendChild(myPaText);

  mydivs.className = "Product";
  mydivs.appendChild(myHThree);
  mydivs.appendChild(myP);

  document.body.appendChild(mydivs);

 
};

for (let i = 0; i < 10; i++) {
    document.write( `<hr>  `)
     addMain(i)
  }

