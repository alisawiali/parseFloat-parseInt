const responsev = await fetch("https://jsonplaceholder.typicode.com/users");
const date = await responsev.json();
console.log(date);

// map Methode um die name zurück gibt.....
const names = date.map((user) => {
  return user.name;
});

console.log(names);
