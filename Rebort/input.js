console.clear();
const books = [
  { name: "Java", auther: "kleinPrinz" },
  { name: "Html css und javascript", auther: "Sams" },
];

// adding items
const booksNew = { name: "Stadt in Stadt" };
// books.push(booksNew)
// 1. chang Opeginal  ARRAY
console.log(books);
// searching items
const addbook = (books, book) => {
  const backCopy = [...books];
  backCopy.push(booksNew);
  console.log(backCopy);
};
addbook(books);
// deleting items

//
const search = "java";
const myfilter = books.filter((ele)=>{
    if(ele.name.includes(search.toLowerCase())){
     return ele
    }
})
console.log(myfilter)

// map   => changes ervey single item to somthing eles 
const resultBooks = books.map((ele)=>{
  return `<div> <span>${ele.name}</span>  <span>${ele.auther}</span></div> `
})
console.log(resultBooks)