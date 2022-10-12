const activeMenuIcon = document.getElementById("open");
const closeMenuIcon = document.getElementById("close");
const navigationEl = document.getElementById("navigation");
const subList2 = document.querySelector(".sub-list-2");


const displayMenu = () => {
  activeMenuIcon.addEventListener("click", () => {
    navigationEl.classList.toggle("toggle-active");
    closeMenuIcon.classList.toggle("toggle-active");
    activeMenuIcon.classList.toggle("toggle-close");
  });
}
const closeMenu = () => {
    closeMenuIcon.addEventListener("click", () => {
      navigationEl.classList.toggle("toggle-close");
      closeMenuIcon.classList.toggle("toggle-close");
      activeMenuIcon.classList.toggle("toggle-active");
    });
  
};

displayMenu();
closeMenu();