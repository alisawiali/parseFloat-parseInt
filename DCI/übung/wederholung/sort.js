console.clear();

const docu = [
  { name: "bmw", size: 4 },
  { name: "acm", size: 2 },
  { name: "ew", size: 5 },
  { name: "frs", size: 1 },
  { name: "beg", size: 6 },
];

// docu.sort((ele1, ele2) => {

// //   return ele1.size - ele2.size;
//   if(ele1.size === ele2.size){
//       return 0
//   }
//   if(ele1.size > ele2.size){
//       return 1
//   }else{
//       return -1
//   }
// });

docu.sort((one, tow) => {
  if (one.name === tow.name) {
    return 0;
  }
  return one.name > tow.name ? 0 : -1;
});
console.log(docu);
