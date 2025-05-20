let hamburgerMenu = document.querySelector("#hamburger_menu")
let navBarMenu = document.querySelector(".nav_bar_menu")

hamburgerMenu.addEventListener("click", function(event){
    hamburgerMenu.classList.toggle("active")
    navBarMenu.classList.toggle("active")
})

let galleryRightArrow = document.querySelector(".fa-solid.fa-arrow-right")

let galleryLeftArrow = document.querySelector(".fa-solid.fa-arrow-left")

let galleryLine = document.querySelector(".gallery_photos")

let pixelNumber = 0

galleryRightArrow.addEventListener("click", function(event){
    if(pixelNumber > -3290){
        pixelNumber -= 140
        galleryLine.style.transform = `translateX(${pixelNumber}px)`
    }
    
})

galleryLeftArrow.addEventListener("click", function(event){
    if(!pixelNumber == 0){
        pixelNumber += 140
        galleryLine.style.transform = `translateX(${pixelNumber}px)`
    }
    
})