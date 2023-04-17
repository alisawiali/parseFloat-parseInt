console.clear()
let myRecipe = {
  title: "Gemüse",
  servings: 30,
  ingredients: ["Türkisch", "Italsch", "Spanisch"],
};

console.log(` Product ${myRecipe.title} und die Preise sind über  ${myRecipe.servings}$ und die Herstelle ${myRecipe.ingredients}`);


console.log("########################");

let myBooks = [
  {
    title: "der klein Prinz",
    author: "Antoine de Saint-Exupéry",
    alreadyRead: true,
    setRad: function () {
      this.alreadyRead = true;
    },
  },

  {
    title: "Sams",
    author: "Paul Maar",
    alreadyRead: false,
    setRad: function () {
      this.alreadyRead = true;
    },
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    alreadyRead: true,
    setRad: function () {
      this.alreadyRead = true ;
    },
  },
];

 myBooks[0].setRad()
for (let i = 0; i < myBooks.length; i++) {
  let geschichte = myBooks[i];
  if (geschichte.alreadyRead) {
    console.log(`'You have already read ${geschichte.title} von ${geschichte.author} gelesen`);
  } else {
    console.log(
      `'You still need to read  ${geschichte.title} von ${geschichte.author} noch nicht gelesen `
    );
  }
}



console.log('#######----------------> ')
function createStudent(name, classNmae, currentModule) {
  let student = {
    name: "Imad",
    classNmae: "b10",
    currentModule: "Programming Basics",
  };
  return student;
}
console.log(createStudent("imad","d33",'It'))
console.log(createStudent());

