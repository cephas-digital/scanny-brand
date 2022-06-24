// sidenav-profile
const sidenavProfile = document.querySelector(".profile");
const sidenavProfileModal = document.querySelector(".profile-modal");
sidenavProfile.addEventListener("mouseover", () => {
  sidenavProfileModal.classList.remove("show-profile-modal");
});
sidenavProfile.addEventListener("mouseout", () => {
  sidenavProfileModal.classList.add("show-profile-modal");
});

// mobile menu

const menuBar = document.querySelector(".menu-bar");
const menuModal = document.querySelector(".menu-modal");
menuBar.addEventListener("click", () => {
  menuModal.classList.toggle("show-nav");
});


// button color
// button font color
// font color
