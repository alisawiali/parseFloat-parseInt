const arrayTest = [
  {
    task: "nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo",
    assignee: "Bettye",
    dueDate: "2022-11-13",
    done: false,
  },
  {
    task: "in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec",
    assignee: "Town",
    dueDate: "2022-09-21",
    done: false,
  },
  {
    task: "sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at",
    assignee: "Tadio",
    dueDate: "2023-04-06",
    done: false,
  },
  {
    task: "in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas",
    assignee: "Stanislas",
    dueDate: "2022-11-07",
    done: false,
  },
  {
    task: "nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit",
    assignee: "Chelsea",
    dueDate: "2022-10-03",
    done: false,
  },
  {
    task: "bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus",
    assignee: "Gigi",
    dueDate: "2023-06-17",
    done: true,
  },
  {
    task: "erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis",
    assignee: "Andrea",
    dueDate: "2022-11-29",
    done: true,
  },
  {
    task: "odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede",
    assignee: "Willyt",
    dueDate: "2023-01-07",
    done: true,
  },
  {
    task: "sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in",
    assignee: "Marcellus",
    dueDate: "2022-10-29",
    done: false,
  },
  {
    task: "vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula",
    assignee: "Cherie",
    dueDate: "2022-11-05",
    done: true,
  },
  {
    task: "nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum",
    assignee: "Claude",
    dueDate: "2023-08-07",
    done: false,
  },
  {
    task: "adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum",
    assignee: "Nina",
    dueDate: "2023-04-24",
    done: true,
  },
  {
    task: "sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam",
    assignee: "Web",
    dueDate: "2022-10-18",
    done: false,
  },
  {
    task: "integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis",
    assignee: "Siffre",
    dueDate: "2022-09-21",
    done: false,
  },
  {
    task: "mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit",
    assignee: "Philomena",
    dueDate: "2022-08-15",
    done: true,
  },
  {
    task: "felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis",
    assignee: "Hammad",
    dueDate: "2022-09-12",
    done: false,
  },
  {
    task: "cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla",
    assignee: "Rem",
    dueDate: "2023-03-18",
    done: true,
  },
  {
    task: "purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse",
    assignee: "Roxanne",
    dueDate: "2023-09-02",
    done: true,
  },
  {
    task: "consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus",
    assignee: "Joly",
    dueDate: "2022-09-06",
    done: false,
  },
  {
    task: "et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et",
    assignee: "Dyane",
    dueDate: "2022-09-04",
    done: false,
  },
];

//  Entwickle eine Funktion, die eine einzelne
function taskingOne(task, assignee, dueDate, done) {
  const article = document.createElement("article");
  const title = document.createElement("h2");
  // id Parent  The Eleemnt  title
  title.id = "Parent";
  title.innerText = task;

  // The Element assignee
  const pargraph = document.createElement("p");
  pargraph.innerHTML = assignee;

  // The Element dueDate
  const parTow = document.createElement("div");
  parTow.innerText = dueDate;
  // The Element done
  const boolenergebnis = document.createElement("p");
  boolenergebnis.innerHTML = done;

  // gefügt p/title parTow in The  article Element
  article.append(title, pargraph, parTow, boolenergebnis);

  return article;
}
// class main Element
const main = document.querySelector("main");

// cearte section Element
const section = document.createElement("section");
main.append(section);

//  forEach für object arrayTest
arrayTest.forEach((ele) => {
  const parent = taskingOne(
    `${ele.assignee}`,
    `${ele.dueDate}`,
    `${ele.task}`,
    `${ele.done}`
  );
  section.append(parent);
});
