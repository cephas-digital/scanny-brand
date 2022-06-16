// explore btn
const exploreBtn = document.getElementById("explore-btn");
const exploreClose = document.querySelector("#explore-close")
// explore modal
const exploreModal = document.querySelector("#explore-modal");

exploreBtn.addEventListener("click", () => {
    exploreModal.classList.toggle("explore-modal")
});
exploreClose.addEventListener("click", () => {
    exploreModal.classList.toggle("explore-modal")
    console.log("working");
});
// exploreModal.addEventListener("click", () => {
//     exploreModal.classList.toggle("explore-modal")
// });

// sidenav-profile
const sidenavProfile = document.querySelector(".profile")
const sidenavProfileModal = document.querySelector(".profile-modal")
sidenavProfile.addEventListener("mouseover", () => {
    sidenavProfileModal.classList.remove("show-profile-modal")
})
sidenavProfile.addEventListener("mouseout", () => {
    sidenavProfileModal.classList.add("show-profile-modal")
})

// mobile menu

const menuBar = document.querySelector(".menu-bar")
const menuModal = document.querySelector(".menu-modal")
menuBar.addEventListener("click", () => {
    menuModal.classList.toggle("show-nav")
})

// button color 
// button font color
// font color


