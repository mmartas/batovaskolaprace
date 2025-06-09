// RESPONZIVNÍ HAMBURGER MENU
let hamburgerMenu = document.querySelector("#hamburger_menu")
let navBarMenu = document.querySelector(".nav_bar_menu")

hamburgerMenu.addEventListener("click", function(event){
    hamburgerMenu.classList.toggle("active")
    navBarMenu.classList.toggle("active")
})


// POSOUVÁNÍ OBRÁZKŮ V SEKCI FOTOGRAFIE NA HLAVNÍ STRANĚ
let galleryRightArrow = document.querySelector(".fa-solid.fa-arrow-right")
let galleryLeftArrow = document.querySelector(".fa-solid.fa-arrow-left")
let galleryLine = document.querySelector(".gallery_photos")
let pixelNumber = -1000;

if(galleryRightArrow){
    galleryRightArrow.addEventListener("click", function(event){
    if(pixelNumber > -4150){
        pixelNumber -= 450
        galleryLine.style.transform = `translateX(${pixelNumber}px)`
        if(pixelNumber == -4150){
            galleryRightArrow.style.display = "none"
        }
    }
})
}

if(galleryLeftArrow){
    galleryLeftArrow.addEventListener("click", function(event){
    if(pixelNumber < -100){
        pixelNumber += 450
        galleryLine.style.transform = `translateX(${pixelNumber}px)`
        if(pixelNumber == -100){
            galleryLeftArrow.style.display = "none"
        }
    }
})
}

// ŠIPKA PRO SCROLL ZPĚT NA VRCH STRÁNKY
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


// NAVBAR NA LEVÉ STRANĚ S KOLEČKAMA
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




// SEKCE KONTAKTY - VYBÍRÁNÍ MÍST NA PROHLÍDKU
let firstPlacePicker = document.getElementById("first_option_place")
let secondPlacePicker = document.getElementById("second_option_place")
let thirdPlacePicker = document.getElementById("third_option_place")
let fourthPlacePicker = document.getElementById("fourth_option_place")
let fifthPlacePicker = document.getElementById("fifth_option_place")
let sixthPlacePicker = document.getElementById("sixth_option_place")
let seventhPlacePicker = document.getElementById("seventh_option_place")
let eightPlacePicker = document.getElementById("eight_option_place")

let firstPlacePickerState = false;
let secondPlacePickerState = false;
let thirdPlacePickerState = false;
let fourthPlacePickerState = false;
let fifthPlacePickerState = false;
let sixthPlacePickerState = false;
let seventhPlacePickerState = false;
let eightPlacePickerState = false;

let fullFirstOption = document.querySelector(".one_option_first")
let fullSecondOption = document.querySelector(".one_option_second")
let fullThirdOption = document.querySelector(".one_option_third")
let fullFourthOption = document.querySelector(".one_option_fourth")
let fullFifthOption = document.querySelector(".one_option_fifth")
let fullSixthOption = document.querySelector(".one_option_sixth")
let fullSeventhOption = document.querySelector(".one_option_seventh")
let fullEightOption = document.querySelector(".one_option_eight")

let gettingPickedOption = function(wholeOption, inputOption){
    if(wholeOption){
        wholeOption.addEventListener("click", function(event){
            if(inputOption.checked) {
                wholeOption.classList.add("active")
            } else {
                wholeOption.classList.remove("active")
            }
        })
    }
}

gettingPickedOption(fullFirstOption, firstPlacePicker)
gettingPickedOption(fullSecondOption, secondPlacePicker)
gettingPickedOption(fullThirdOption, thirdPlacePicker)
gettingPickedOption(fullFourthOption, fourthPlacePicker)
gettingPickedOption(fullFifthOption, fifthPlacePicker)
gettingPickedOption(fullSixthOption, sixthPlacePicker)
gettingPickedOption(fullSeventhOption, seventhPlacePicker)
gettingPickedOption(fullEightOption, eightPlacePicker)




window.addEventListener('DOMContentLoaded', () => {
    const galerie = document.querySelectorAll('.gallery_page_photos img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    let currentIndex = 0;

    galerie.forEach((img, index) => {
        img.addEventListener('click', () => {
            currentIndex = index;
            showImage();
        });
    });

    function showImage() {
        lightbox.style.display = 'flex';
        lightboxImg.src = galerie[currentIndex].src;
    }

    function closeLightbox() {
        lightbox.style.display = 'none';
    }

    function changeImage(direction) {
        currentIndex += direction;
        if (currentIndex < 0) currentIndex = galerie.length - 1;
        if (currentIndex >= galerie.length) currentIndex = 0;
        showImage();
    }

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target.classList.contains('close')) {
            closeLightbox();
        }
    });

    // Export funkcí do global scope, pokud jsou volány v HTML onclick=""
    window.closeLightbox = closeLightbox;
    window.changeImage = changeImage;
});


// input[type='submit']

let newsletterSubmit = document.querySelector(".footer_newsletter form")
let newsletterSubmitMessagePlace = document.querySelector("#message_place")

newsletterSubmit.addEventListener("submit", function(event){
    event.preventDefault()
    newsletterSubmitMessagePlace.textContent = "Děkujeme, byl jsi přihlášen k odběru novinek."
})

let orderGuideSubmit = document.querySelector(".contact_page_text_container form")
let orderGuideMessagePlace = document.querySelector("#ordering_message")

orderGuideSubmit.addEventListener("submit", function(event){
    event.preventDefault()
    orderGuideMessagePlace.textContent = "Váš požadavek zpracujeme a budete kontaktováni."
})