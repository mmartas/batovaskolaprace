let hamburgerMenu = document.querySelector("#hamburger_menu")
let navBarMenu = document.querySelector(".nav_bar_menu")

hamburgerMenu.addEventListener("click", function(event){
    hamburgerMenu.classList.toggle("active")
    navBarMenu.classList.toggle("active")
})