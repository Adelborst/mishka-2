var navMain = document.querySelector(".main-nav");
var navToggle = navMain.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});


// var slider = document.querySelector(".slider");
// var sliderItem = slider.querySelector(".slider-item");
// var slide_left = slider.getElementById(".reviews__btn--prev");
// var slide_right = slider.getElementById(".reviews__btn--right");
