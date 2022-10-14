const activeMenuIcon = document.getElementById("open");
const closeMenuIcon = document.getElementById("close");
const navigationEl = document.getElementById("navigation");
const subList2 = document.querySelector(".sub-list-2");


const displayMenu = () => {
  activeMenuIcon.addEventListener("click", () => {
    navigationEl.classList.add("toggle-active");
    closeMenuIcon.classList.add("open");
    activeMenuIcon.classList.add("close");


  });
}
const closeMenu = () => {
    closeMenuIcon.addEventListener("click", () => {
      navigationEl.classList.remove("toggle-active");
      closeMenuIcon.classList.remove("open");
      activeMenuIcon.classList.remove("close");

    });
  
};

displayMenu();
closeMenu();