 let sliderImages = document.querySelectorAll(".slide"),
        prev = document.querySelector("#prev"),
        next = document.querySelector("#next"),
        carousel = document.querySelectorAll("#carousel-indicator ul li"),
        current = 0,
        auto = true,
        timeInterval = 6000,
        slideInterval;

    //RESET SLIDES
    function reset(){
        //search for slide with class active
        active = document.querySelector(".active");

        //remove class active from the active slide
        active.classList.remove("active");

        //search for carousel indicator with class current
        current = document.querySelector(".current");

        //remove class current from the current indicator
        current.classList.remove("current");
        
    }

    //CLEAR CLASS AFTER SLIDE GETS ACTIVE
    function clearActiveClass(){
        setTimeout(function () {
            active.classList.remove("active");
            current.classList.remove("current");
        });
    }

    //NEXT SLIDE FUNCTION
    function nextSlide() {
        reset();
        //add class active if it has next sibling
        if (active.nextElementSibling, current.nextElementSibling) {
            active.nextElementSibling.classList.add("active");
            current.nextElementSibling.classList.add("current");
        } else {
            //if it doesn't have sibling add class to first slide
            sliderImages[0].classList.add("active");
            carousel[0].classList.add("current");
        }
        clearActiveClass();        
    }

    //NEXT BUTTON ACTION
    next.addEventListener("click", function () {
        nextSlide();
        if (auto) {
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, timeInterval);
        }
    });


    //PREVIOUS SLIDE FUNCTION
    function prevSlide() {
        reset();
        //add class active if it has previous sibling
        if (active.previousElementSibling, current.previousElementSibling) {
            active.previousElementSibling.classList.add("active");
            current.previousElementSibling.classList.add("current");
        } else {
            //if it doesn't have sibling add class to last slide
            sliderImages[sliderImages.length - 1].classList.add("active");
            carousel[carousel.length - 1].classList.add("current");
        }
        clearActiveClass(); 
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

    //CAROUSEL
    carousel.forEach(function(indicator, index){
        indicator.addEventListener("click", function(){            
            reset();
            sliderImages[index].classList.add("active");
            carousel[index].classList.add("current");                    
            clearActiveClass();
        }); 
    });
    

    
