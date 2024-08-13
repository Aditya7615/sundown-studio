const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function page3Animation() {
  var pic = document.querySelector("#elem-container");
  var fix = document.querySelector("#fixed-img");
  pic.addEventListener("mouseenter", function () {
    fix.style.display = "block"; // if mouseenter on the elem-container it will show  fixed-img //
  });
  pic.addEventListener("mouseleave", function () {
    fix.style.display = "none"; // if mouseleave, elem-container not show fixed-img //
  });
  var elems = document.querySelectorAll(".elem");
  elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      var img = e.getAttribute("data-img");
      fix.style.backgroundImage = `url(${img})`;
    });
  });
}

function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
  });
}
function menuAnimation() {
  var menubar = document.querySelector("nav h3");
  var full = document.querySelector("#full-scr");
  var navimg = document.querySelector("nav img");
  var flag = 0;
  menubar.addEventListener("click", function () {
    if (flag == 0) {
      full.style.top = 0;
      navimg.style.opacity = 0;
      flag = 1;
    } else {
      full.style.top = "-100%";
      navimg.style.opacity = 1;
      flag = 0;
    }
  });
}
function loaderAnimation() {
  var loader = document.querySelector("#loader");
  setTimeout(function () {
    loader.style.top = "-100%";
  }, 4200);
}

page3Animation();
swiperAnimation();
menuAnimation();
loaderAnimation();
