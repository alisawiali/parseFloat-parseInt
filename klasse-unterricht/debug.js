console.clear()
// setTimeout(() => {
//     console.log("Guten Morgen")
// }, 1000);
 console.log("Guten Morgen")
const a =1 ;
const b = "Hallo" 
const c = {prop:"Value"}





function sayHallo(test){
    const sum = test + 1;
    const b = test + 2 ;
}
 console.log(sayHallo())
 console.log(`my vars `,a,c,b)

 let list =[
    { item: "kaffee", type: "Drink", price: 200 },
    { item: "cofee", type: " warm Drink", price: 15 },
    { item: "Essprisso", type: "Kalt Drink", price: 3.5 },
  ]

  function callbin(cal) {
     return cal.reduce((item,obj)=>{
            if(item.price < obj.price){
                return item
            }else{
                return obj
            }
        })
  }

 const result = callbin(list)
 console.log(result)