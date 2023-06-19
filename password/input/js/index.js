// your code here
const moveSection = document.querySelectorAll("main section");
const pills = document.querySelectorAll("main aside li");

pills.forEach((poll, index) => {
  poll.addEventListener("mouseenter", () => {
    poll.style.backgroundColor = "deepskyblue";
  });
  poll.addEventListener("mouseleave", () => {
    poll.style.backgroundColor = "";
  });

  poll.addEventListener("click", (evt) => {
    pills.forEach((element) => {
      element.classList.remove("selected");
    });
    evt.target.classList.add("selected");
    moveSection.forEach((ele) => {
      ele.classList.remove("active");
    });
    moveSection[index].classList.add("active");
  });
});
