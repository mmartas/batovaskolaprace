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
let pointNoSix = document.getElementById("seventh_point")
let pointNoSeven = document.getElementById("eighth_point")
let pointNoEight = document.getElementById("ninth_point")
let pointNoNine = document.getElementById("tenth_point")
let pointNoTen = document.getElementById("eleventh_point")
let pointNoEleven = document.getElementById("twelfth_point")
let pointNoTwelve = document.getElementById("footer_point")

let historyMainTitle = document.getElementById("MainTitle")
let historyFirstSection = document.getElementById("Section1")
let historySecondSection = document.getElementById("Section2")
let historyThirdSection = document.getElementById("Section3")
let historyFourthSection = document.getElementById("Section4")
let historyFifthSection = document.getElementById("Section5")
let historySixthSection = document.getElementById("Section6")
let historySeventhSection = document.getElementById("Section7")
let historyEighthSection = document.getElementById("Section8")
let historyNinthSection = document.getElementById("Section9")
let historTenthSection = document.getElementById("Section10")
let historyEleventhSection = document.getElementById("Section11")
let historyFooter = document.getElementById("Footer")


let gettingActivePlace = function(point, section){
    const activatingPoints = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry){
        if (entry.isIntersecting) {
            if(point){
                point.classList.add('active');
                if(point == pointNoOne){
                    point.textContent = "1"
                } else if(point == pointNoTwo){
                    point.textContent = "2"
                } else if(point == pointNoThree){
                    point.textContent = "3"
                } else if(point == pointNoFour){
                    point.textContent = "4"
                } else if(point == pointNoFive){
                point.textContent = "5"
                } else if(point == pointNoSix){
                    point.textContent = "6"
                } else if(point == pointNoSeven){
                    point.textContent = "7"
                } else if(point == pointNoEight){
                    point.textContent = "8"
                } else if(point == pointNoNine){
                    point.textContent = "9"
                } else if(point == pointNoTen){
                    point.textContent = "10"
                } else if(point == pointNoEleven){
                    point.textContent = "11"
                }
            }
            
        } else {
            if(point){
                point.classList.remove("active")
                point.textContent = ""
            }
        }
    });
    });
    
    if(section) activatingPoints.observe(section);
}

gettingActivePlace(pointNoZero, historyMainTitle)
gettingActivePlace(pointNoOne, historyFirstSection)
gettingActivePlace(pointNoTwo, historySecondSection)
gettingActivePlace(pointNoThree, historyThirdSection)
gettingActivePlace(pointNoTwelve, historyFooter)
gettingActivePlace(pointNoFour, historyFourthSection)
gettingActivePlace(pointNoFive, historyFifthSection)
gettingActivePlace(pointNoSix, historySixthSection)
gettingActivePlace(pointNoSeven, historySeventhSection)
gettingActivePlace(pointNoEight, historyEighthSection)
gettingActivePlace(pointNoNine, historyNinthSection)
gettingActivePlace(pointNoTen, historTenthSection)
gettingActivePlace(pointNoEleven, historyEleventhSection)



let firstPlacePicker = document.getElementById("first_option_place")

let firstPlacePickerState = false;

let fullFirstOption = document.querySelector(".one_option_first")

firstPlacePicker.addEventListener("click", function(event){
    if(firstPlacePicker.checked) {
        fullFirstOption.style.borderColor = "var(--orange)"
    } else {
        fullFirstOption.style.borderColor = "#000"
    }
})