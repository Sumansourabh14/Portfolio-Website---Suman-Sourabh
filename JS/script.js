const navList = document.querySelector(".nav-list");
const menu = document.querySelector(".menu-svg");

menu.addEventListener("click", function () {
    navList.classList.toggle("toggle");    
})