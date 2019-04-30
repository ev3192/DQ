var slideIndex = 1;
selectSlides(slideIndex);
showSlides();

// Next/previous controls
function plusSlides(n) {
  selectSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  selectSlides(slideIndex = n);
}

function selectSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function scrollWindow() {
  window.location.assign("index.html")
  return new Promise((resolve) => {
    setTimeout(() => { 
      window.scrollTo(736,2335); resolve(); }, 1000);
  });
}

// Function to display hours from button
function saanichHoursDisplay() {
  var contentId = document.getElementById("saanich-hours");
  contentId.style.display == "block" ? contentId.style.display = "none":
  contentId.style.display="block";
}
function saanichBottomHoursDisplay() {
  var contentId = document.getElementById("saanich-bottom");
  contentId.style.display == "block" ? contentId.style.display = "none":
  contentId.style.display="block";
}