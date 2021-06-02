let bgBanner = document.querySelector("main section.banner");
let textBanner = document.querySelector("main section.banner .container");
window.addEventListener("scroll", function() {
    var value = window.scrollY;
    bgBanner.style.top = value * 0.5 + "px";
    textBanner.style.top = value * -1 + "px";
})