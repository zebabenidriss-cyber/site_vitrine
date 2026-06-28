const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("topmenu");           

menuToggle.addEventListener("click", function () {
    menu.classList.toggle("active");
});