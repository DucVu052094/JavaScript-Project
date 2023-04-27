
function countdown(){   //function that countdown and display time's up at the end
    var seconds = document.getElementById("seconds").value ;

    function tick(){
        seconds = seconds -1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if (seconds == -1){
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML= "";
        }
    }
    tick();

}


let slideIndex = 1; //slide index that control which image is being display
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {    //adding 1 or subtract 1 to index to move to next or previous image
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} //if at last image, moving forward will loop to 1st image
  if (n < 1) {slideIndex = slides.length} //if at first image, moving back will loop to last image
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) { //displaying which dot will be active depending on which image is being display
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}