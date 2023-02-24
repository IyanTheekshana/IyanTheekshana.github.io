$(".hamburger").click(function () {
  $(".hamburger").toggleClass("is-active");
});

//navbar active class on scrolling
const li = document.querySelectorAll(".nav-link");
const sec = document.querySelectorAll(".main-section");

function activemenu() {
  let len = sec.length;
  while (--len && window.scrollY + 100 < sec[len].offsetTop) {}
  li.forEach((ltx) => ltx.classList.remove("active"));
  li[len].classList.add("active");
}
activemenu();
window.addEventListener("scroll", activemenu);

document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    type: "loop",
    perPage: 5,

    autoplay: true,
    arrows: false,
    pagination: false,
    cloneStatus: true,
    interval: 2000,
    gap: "1em",
    drag: true,
    focus: "center",
    breakpoints: {
      640: {
        perPage: 2,
        gap: "0.5em",
      },
      480: {
        perPage: 1,
        gap: "0em",
      },
    },
  });
  splide.mount();
});

AOS.init();
