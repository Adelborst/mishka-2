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


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider-item");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length} ;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}


// var slider = document.querySelector(".slider");
// // var sliderItem = slider.querySelector(".slider-item");
// var slide_left = slider.querySelector(".reviews__btn--prev");
// var slide_right = slider.querySelector(".reviews__btn--right");
// var slideNum = slider.getElementsByTagName('li').length; // считаем сколько отзывов заложено в слайдер
// var now = 0; // первым будет выведен отзыв с индексом 0
// var sliderOffset = [];
// for (var i = 0; i < slideNum; i++) sliderOffset.push(-i * 104 + 'px'); // создаем массив с вариантами смещения слайдера для каждой картинки
//   slide_left.onclick = function() {
//     --now;// уменьшаем индекс картинки
//     if(now < 0) now = slideNum - 1; // если залезли в отрицательную область, делаем текущей последнюю картинку
//       slider.style.left = sliderOffset[now]; //смещаем слайдер в соответствии с текущей картинкой
//     }
//   slide_right.onclick = function() {
//     ++now; // увеличиваем индекс картинки
//     if(now > slideNum - 1) now = 0; // если индекс больше, чем может быть, делаем текущей первую картинку
//       slider.style.left = sliderOffset[now]; // см. выше
//     }
