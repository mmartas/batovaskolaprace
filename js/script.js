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

let arrowToScrollTop = document.getElementById("arrowScrollToTop")

window.addEventListener("scroll", function(event){
    if(window.scrollY > 600) {
        arrowToScrollTop.style.display = "block"
    } else {
        arrowToScrollTop.style.display = "none"
    }
})

arrowToScrollTop.addEventListener("click", function(event){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})