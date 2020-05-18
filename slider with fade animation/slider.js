let sliderImages = document.querySelectorAll(".slide"),
    prev = document.querySelector("#prev"),
    next = document.querySelector("#next"),
    current = 0,
    auto = true,
    timeInterval = 6000,
    slideInterval;

//NEXT SLIDE FUNCTION
function nextSlide() {
    active = document.querySelector(".active");
    active.classList.remove("active");
    if (active.nextElementSibling) {
        active.nextElementSibling.classList.add("active");
    } else {
        sliderImages[0].classList.add("active");
    }

    setTimeout(function () {
        active.classList.remove("active")
    });
}

//Next Button Action
next.addEventListener("click", function () {
    nextSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, timeInterval);
    }
});


//PREVIOUS SLIDE FUNCTION
function prevSlide() {
    //search for slide with class active
    active = document.querySelector(".active");

    //remove class active
    active.classList.remove("active");

    //add class active if it has previous sibling
    if (active.previousElementSibling) {
        active.previousElementSibling.classList.add("active");
    } else {
        //if it doesn't have sibling add class to last slide
        sliderImages[sliderImages.length - 1].classList.add("active");
    }
    setTimeout(function () {
        active.classList.remove("active")
    });
}

//PREVIOUS BUTTON ACTION
prev.addEventListener("click", function () {
    prevSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, timeInterval);
    }
});

//AUTO SLIDE
if (auto) {
    slideInterval = setInterval(nextSlide, timeInterval);
}