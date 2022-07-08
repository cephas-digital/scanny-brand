// explore btn
const exploreBtn = document.getElementById("explore-btn");
const exploreClose = document.querySelector("#explore-close");
// explore modal
const exploreModal = document.querySelector("#explore-modal");

exploreBtn.addEventListener("click", () => {
  exploreModal.classList.toggle("explore-modal");
});
exploreClose.addEventListener("click", () => {
  exploreModal.classList.toggle("explore-modal");
  console.log("working");
});

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

// add link
const linkArea = document.querySelector(".link");
const addLinkBtn = document.querySelector(".add-new-link");

let link = `
<div class="mt-12 h-auto shadow-md flex" link-state="false">
<div
  class="w-8 bg-white border-r rounded-l-md fill-[#acb5bf] text-md flex items-center justify-center drag-button"
>
  <svg viewBox="0 0 16 16" color="palette.blueGrey5" enable-background="new 0 0 24 24" class="hover:cursor-pointer h-4"><path d="M6 2C6 0.9 6.9 0 8 0C9.1 0 10 0.9 10 2C10 3.1 9.1 4 8 4C6.9 4 6 3.1 6 2M6 8C6 6.9 6.9 6 8 6C9.1 6 10 6.9 10 8C10 9.1 9.1 10 8 10C6.9 10 6 9.1 6 8M6 14C6 12.9 6.9 12 8 12C9.1 12 10 12.9 10 14C10 15.1 9.1 16 8 16C6.9 16 6 15.1 6 14"></path></svg>
</div>
<div
  class="new-link-content w-full bg-white rounded-tr-md rounded-br-md"
>
<div class="grid grid-cols-12 p-3">
<div class="col-span-11">
  <input
    type="text"
    placeholder="Title"
    class="w-full outline-none"
    oninput="getTitle(event)"
  />
  <input
    type="url"
    placeholder="Url"
    class="w-full outline-none url"
    oninput="getUrl(event)"
  />
</div>
<div class="col-span-1 w-10 h-6 rounded-full bg-gray-300 flex items-center relative hover:cursor-pointer"><div class="but"></div></div>
</div>
  <div class="grid grid-cols-12 p-3">
      <div class="fill-[#acb5bf]">
        <svg viewBox="0 0 16 16" display="block" enable-background="new 0 0 24 24" class="w-4 h-4"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M1 5C1 3.34315 2.34315 2 4 2C5.65685 2 7 3.34315 7 5V8H4C2.34315 8 1 6.65685 1 5ZM4 1C6.20914 1 8 2.79086 8 5V8H13.7929L11.1464 5.35355L11.8536 4.64645L15.3536 8.14645V8.85355L11.8536 12.3536L11.1464 11.6464L13.7929 9H8V16H7V9H4C1.79086 9 0 7.20914 0 5C0 2.79086 1.79086 1 4 1Z" fill="currentColor"></path></g></svg>
      </div>
      <div>
        <svg viewBox="0 0 16 16" display="block" enable-background="new 0 0 24 24" class="w-4 h-4 fill-[#acb5bf]"><g><rect width="15" height="15" x=".5" y=".5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3"></rect><circle cx="11.5" cy="4.5" r="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></circle><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.123 13.142L6.429 7.5l-3.694 5.642"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.18 11.702L10.621 9.5l2.385 3.642"></path></g></svg>
      </div>
      <div>
        <svg viewBox="0 0 16 16" display="block" enable-background="new 0 0 24 24" class="w-4 h-4 fill-[#acb5bf]"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.613 1.434l1.33 4.007a.625.625 0 00.6.422h4.318a.623.623 0 01.378 1.13l-3.5 2.487a.6.6 0 00-.227.68l1.334 4.017a.639.639 0 01-.991.7L8.37 12.4a.642.642 0 00-.739 0l-3.485 2.477a.638.638 0 01-.99-.7l1.335-4.02a.6.6 0 00-.227-.68l-3.5-2.485a.622.622 0 01.378-1.129h4.32a.624.624 0 00.6-.422l1.33-4.007a.649.649 0 011.221 0z"></path></svg>
      </div>
      <div>
        <svg viewBox="0 0 16 16" display="block" enable-background="new 0 0 24 24" class="w-4 h-4 fill-[#acb5bf]"><g><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5.5v2M10.5.5v2M11.5 9.5v2h2"></path><circle cx="11.5" cy="11.5" r="4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></circle><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 5.85V2.5a1 1 0 00-1-1h-11a1 1 0 00-1 1v10a1 1 0 001 1h4.351"></path></g></svg>
      </div>
      <div>
        <svg viewBox="0 0 12 17" display="block" enable-background="new 0 0 24 24" class="w-4 h-4"><path d="M2.10899 16.0742H9.61366C10.7788 16.0742 11.3613 15.4916 11.3613 14.196V8.40465C11.3613 7.23944 10.8901 6.64813 9.93921 6.54378V4.59596C9.93921 1.61335 8.02877 0.0742188 5.86133 0.0742188C3.69388 0.0742188 1.78345 1.61335 1.78345 4.59596V6.54378C0.832512 6.64813 0.361328 7.23944 0.361328 8.40465V14.196C0.361328 15.4916 0.935316 16.0742 2.10899 16.0742ZM2.90572 4.46552C2.90572 2.35248 4.22504 1.15248 5.86133 1.15248C7.48905 1.15248 8.81694 2.35248 8.81694 4.46552V6.52639H2.90572V4.46552ZM2.14326 15.0133C1.68921 15.0133 1.47504 14.822 1.47504 14.2655V8.32639C1.47504 7.76987 1.68921 7.58726 2.14326 7.58726H9.58796C10.0334 7.58726 10.2391 7.76987 10.2391 8.32639V14.2655C10.2391 14.822 10.0334 15.0133 9.58796 15.0133H2.14326Z"></path></svg>
      </div>
      <div class="fill-[#acb5bf]">
        <svg viewBox="0 0 16 16" display="block" enable-background="new 0 0 24 24" class="w-4 h-4"><g><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 15.446L.553 15.5.5.5"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.493 13.494l.007-2a1 1 0 00-.994-1h-1a1 1 0 00-1 .994l-.007 2M10.493 13.494l.007-6a1 1 0 00-.994-1h-1a1 1 0 00-1 .994l-.007 6M15.493 13.494l.007-10a1 1 0 00-.994-1h-1a1 1 0 00-1 .994l-.007 10"></path></g></svg>
      </div>
    <div class="col-span-6 px-6 ml-auto"><svg viewBox="0 0 16 16" display="block" enable-background="new 0 0 24 24" class="w-4 h-4 fill-[#acb5bf] hover:cursor-pointer delete-link" id="delete-link"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6 2.5v-2h4v2M1 2.5h14M9.533 13.5l.25-9M6.217 4.5l.25 9M2.661 4.5l.889 11h8.9l.888-11"></path></svg></div>
  </div>
</div>


</div>
<div class="delete-bar bg-white rounded-b-md shadow-md hide" id="delete-area">
<div class="flex items-center justify-between px-4 bg-[#EBEEF1]">
  <span></span>
  <p class="font-medium capitalize">delete</p>
  <button class="delete-icon p-1">
    <svg viewBox="0 0 16 16" color="palette.blueGrey12" enable-background="new 0 0 24 24" class="h-3 hover:cursor-pointer"><path d="M7.97 6.2L14.23 0L16 1.77L9.8 8.03L15.94 14.24L14.23 15.94L7.97 9.74L1.77 15.94L0 14.24L6.26 8.03L0 1.77L1.77 0L7.97 6.2Z"></path></svg>
  </button>
</div>
<div class="p-2">
  <p class="text-center pt-4">Delete this forever?</p>
  <div class="py-4 flex gap-x-4">
    <button class="py-3 w-full bg-[#EBEEF1] font-medium text-lg rounded-md link-cancel-delete">Cancel</button>
    <button class="py-3 w-full bg-black text-white font-medium text-lg rounded-md link-delete">Delete</button>
  </div>
</div>

</div>
</div>

`;

let allLinks = [];
let allLinksList = [];

addLinkBtn.addEventListener("click", (e) => {
  let newLink = document.createElement("li");

  newLink.innerHTML = link;
  linkArea.append(newLink);

  newLink.addEventListener("click", (e) => {
    let classes = e.target.classList;

    for (let item of classes) {
      if (item === "delete-link") {
        newLink.children[1].classList.toggle("hide");
      }
      if (item === "link-cancel-delete" || item === "delete-icon") {
        newLink.children[1].classList.add("hide");
      }
      if (item === "link-delete") {
        newLink.remove();
      }
      if (item === "but") {
        let itemClass = e.target.parentNode.classList;
        e.target.classList.toggle("but");
        e.target.classList.toggle("butt");
        newLink.setAttribute("link-state", "true");

        addToList(newLink, itemClass);
      }
      if (item === "butt") {
        let itemClass = e.target.parentNode.classList;
        e.target.classList.toggle("but");
        e.target.classList.toggle("butt");
        newLink.setAttribute("link-state", "false");
        removeList(newLink, itemClass);
        // console.log(newLink.getAttribute("link-state"));
      }
    }
  });
  console.log(newLink.children[0].children[1].children[0].children[0].children);
});

new Sortable(linkArea, {
  animation: 300,
});
let linkTitle = "";
let linkUrl = "";
function getTitle(e) {
  // console.log(e.target.value);
  linkTitle = e.target.value;
}
function getUrl(e) {
  if (e.target.validity.valid) {
    linkUrl = e.target.value;
  } else {
    return "";
  }
}

function addToList(link, itemClass) {
  if (
    link.children[0].children[1].children[0].children[0].children[0].value !==
      "" &&
    link.children[0].children[1].children[0].children[0].children[1].value !==
      ""
  ) {
    allLinks.push({
      title:
        link.children[0].children[1].children[0].children[0].children[0].value,
      url: link.children[0].children[1].children[0].children[0].children[1]
        .value,
    });
    let linkStack = document.querySelector(".link-area-stack");
    console.log(linkStack);
    itemClass.add("success");
    let links = document.createElement("a");
    links.setAttribute("href", linkUrl);
    links.classList.add("link-box");
    links.innerText = linkTitle;
    linkStack.appendChild(links);
    // for (let it of allLinksList) {
    //   allLinksList.push(links)
    //   console.log(it.innerText);
    // }
    console.log(allLinks);
  }
}

function removeList(link, itemClass) {
  let inputValue =
    link.children[0].children[1].children[0].children[0].children[0].value;

  allLinks = allLinks.filter((links) => links.title !== inputValue);
  itemClass.remove("success");
  allLinksList = allLinksList.filter((links) => links.innerText !== "");

  console.log(allLinks);
  console.log(allLinksList);
}
