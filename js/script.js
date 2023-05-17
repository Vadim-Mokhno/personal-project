let burgerMenu = document.querySelector(".burger-menu");
let burgerNavigation = document.querySelector(".header__burger-menu-nav-bar");

document.querySelector(".burger-menu").addEventListener("click", function () {
  burgerMenu.classList.toggle("close");
  burgerNavigation.classList.toggle("active");
});
