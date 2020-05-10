let sliderImages = document.querySelectorAll('.slide'),
		leftArrow = document.querySelector("#prev"),
    rightArrow = document.querySelector("#next"),
    current = 0;
    
//Clear all slide images
function reset(){
	for(let i = 0; i < sliderImages.length; i++){
  	sliderImages[i].style.display = "none";
  }
}

//Initialize Slider with First Image
function startSlide(){
	reset();
  sliderImages[0].style.display = "flex";
}

//Show Previous
function slideLeft(){
	reset();
	sliderImages[current -1].style.display = "flex";
  current--;
}

//Click Prev Button
leftArrow.addEventListener('click', function(){  
  //sliderImages[current].classList.remove("showSlide");
  if(current === 0){
  	current = sliderImages.length;
  }
  slideLeft();
});

//Show Next
function slideRight(){
	reset();
	sliderImages[current +1].style.display = "flex";
  current++;
}

//Click Next Button
rightArrow.addEventListener('click', function(){	
    //sliderImages[current].classList.remove("showSlide");
  if(current === sliderImages.length - 1){
  	current = - 1;
  }
  slideRight();
});

startSlide();