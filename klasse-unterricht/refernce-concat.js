
console.clear()


let o = {
    username: "Imad",
    password: "password",
    product: {
      brand: "Nike",
    },
  };
  const oCopy = { ...o };
  oCopy.username = "Alisawi";
  oCopy.product.brand = "Poma";
  console.log(o, oCopy);
  
  // 2 use case (concat)  zusammen 
  const oStatus = {
    status: "Active",
  };
  
  const oUser = { 
      name: "Nike",
      pass:'test',
      ...oStatus,
      ...o
  };
  console.log(oUser)