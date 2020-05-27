let slideWrap = document.querySelector("#slider"),
    sliderImage = document.querySelectorAll(".slide"),
    prevBtn = document.querySelector("#prev"),
    nextBtn = document.querySelector("#next"),
    dots = document.querySelector("#carousel-indicator ul li"),
    auto = false,
    timeInterval = 6000,
    setInterval;

//Set the fixed width for active carousel to display
let slideWidth = sliderImage[0].getBoundingClientRect().width;

//Position the slider next to each other
/*sliderImages[0].style.left = "0";
sliderImages[1].style.left = slideWidth + "px";
sliderImages[2].style.left = slideWidth * 2 + "px";*/

sliderImage.forEach(function (slide, index) {
    slide.style.left = slideWidth * index + "px";
});

//Make the targeted slide active
function moveToSlide(slideWrap, currentSlide, targetSlide) {
    slideWrap.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove("active");
    targetSlide.classList.add("active");
    //currentDot.classList.remove("current");
    //targetDot.classList.add("current");
}

//Previous Button Function
prevBtn.addEventListener("click", function () {
    //console.log("This is previous");
    let currentSlide = slideWrap.querySelector(".active"),
        prevSlide = currentSlide.previousElementSibling;

    moveToSlide(slideWrap, currentSlide, prevSlide);
});


//Next Button Function
nextBtn.addEventListener("click", function () {
    //console.log("This is next");
    let currentSlide = slideWrap.querySelector(".active"),
        nextSlide = currentSlide.nextElementSibling;

    moveToSlide(slideWrap, currentSlide, nextSlide);
});


//Indicators on action


//Auto Slide



