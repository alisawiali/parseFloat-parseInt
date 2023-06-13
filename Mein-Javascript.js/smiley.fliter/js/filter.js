const peopleAraa = [
  {
    name: "Ali",
    age: 30,
    gender: "Male",
    accountActive: true,
  },
  {
    name: "Imad",
    age: 25,
    gender: "Weman",
    accountActive: "peocessing",
  },
  {
    name: "Jan",
    age: 40,
    gender: "famile",
    accountActive: true,
  },
  {
    name: "Alex",
    age: 50,
    gender: "Male",
    accountActive: false,
  },
  {
    name: "Jssein",
    age: 55,
    gender: "Male",
    accountActive: true,
  },
];

const list = document.querySelector(".list");

const addList = (arra, element) => {
  arra.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.name + " - " + item.age;
    element.append(li);
  });
};

const filterReadyArray = peopleAraa.filter((person) => {
  // return person.name;
  return person.name.match(/^J/g); // Hier wird nach buchstaben gezeigt...
});
addList(filterReadyArray, list);
