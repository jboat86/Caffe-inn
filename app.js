var open = document.querySelector(".hamburger");

var close = document.querySelector(".close");

var navList = document.querySelector(".nav-links");

open.addEventListener("click", () => {
  document
    .querySelector(".overlay-content")
    .getElementsByClassName("nav-links").display = "block";
});
