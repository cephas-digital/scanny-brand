const share = document.querySelector(".share");
const modal = document.querySelector(".modal");

share.addEventListener("click", () => {
  modal.classList.toggle("hide");
});

addEventListener("click", (e) => {
  let classLists = e.target.classList;

  classLists.contains("modal")
    ? modal.classList.toggle("hide")
    : console.log("false");
});
