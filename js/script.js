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

if(galleryRightArrow){
    galleryRightArrow.addEventListener("click", function(event){
    if(pixelNumber > -3290){
        pixelNumber -= 140
        galleryLine.style.transform = `translateX(${pixelNumber}px)`
    }
})
}

if(galleryLeftArrow){
    galleryLeftArrow.addEventListener("click", function(event){
    if(!pixelNumber == 0){
        pixelNumber += 140
        galleryLine.style.transform = `translateX(${pixelNumber}px)`
    }
})
}


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


let pointNoZero = document.getElementById("first_point")
let pointNoOne = document.getElementById("second_point")
let pointNoTwo = document.getElementById("third_point")
let pointNoThree = document.getElementById("fourth_point")
let pointNoFour = document.getElementById("fifth_point")
let pointNoFive = document.getElementById("sixth_point")

let historyMainTitle = document.getElementById("historyMainTitle")
let historyFirstSection = document.getElementById("historySection1")
let historySecondSection = document.getElementById("historySection2")
let historyThirdSection = document.getElementById("historySection3")
let historyFourthSection = document.getElementById("historySection4")
let historyFooter = document.getElementById("historyFooter")


let gettingActivePlace = function(point, section){
    const activatingPoints = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry){
        if (entry.isIntersecting) {
            point.classList.add('active');
            if(point == pointNoOne){
                point.textContent = "1"
            } else if(point == pointNoTwo){
                point.textContent = "2"
            } else if(point == pointNoThree){
                point.textContent = "3"
            } else if(point == pointNoFour){
                point.textContent = "4"
            }
        } else {
            point.classList.remove("active")
            point.textContent = ""
        }
    });
    });
    
    activatingPoints.observe(section);
}

gettingActivePlace(pointNoZero, historyMainTitle)
gettingActivePlace(pointNoOne, historyFirstSection)
gettingActivePlace(pointNoTwo, historySecondSection)
gettingActivePlace(pointNoThree, historyThirdSection)
gettingActivePlace(pointNoFour, historyFourthSection)
gettingActivePlace(pointNoFive, historyFooter)



