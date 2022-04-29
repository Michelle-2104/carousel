const slides = document.getElementsByClassName("carousel-item")
let slidePosition = 0
const totalSlides = slides.length

document.getElementById("carousel-btn-next").addEventListener("click", moveToNextSlide)
document.getElementById("carousel-btn-prev").addEventListener("click", moveToPrevSlide)
currentSlide = document.getElementsByClassName("current-slide")
currentSlide.textContent = slidePosition+1

function changeCurrentSlide() {
    currentSlide.textContent = slidePosition +1
}

function hideAllSlides() {
    for(let slide of slides) {
        slide.classList.remove("carousel-item-visible")
        slide.classList.add("carousel-item-hidden")
    }
}



function moveToNextSlide() {
    hideAllSlides()
    if (slidePosition === totalSlides -1) { 
        slidePosition = 0
        changeCurrentSlide()
    } else {
        slidePosition++
        changeCurrentSlide()
    }
    slides[slidePosition].classList.add("carousel-item-visible")
}

function moveToPrevSlide() { 
hideAllSlides()
if (slidePosition === 0) { 
    slidePosition = totalSlides -1
    changeCurrentSlide()
} else {
    slidePosition--
    changeCurrentSlide()
}
slides[slidePosition].classList.add("carousel-item-visible")
}

