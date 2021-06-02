const btn = document.querySelector("header .container button");
const menu = document.querySelector("header .container .nav-link");
const xIcon = document.querySelector("header .container button .fa-close");
const barsIcon = document.querySelector("header .container button .fa-bars");

xIcon.style.display = "none";

btn.addEventListener("click", toggleMenu)

function toggleMenu(x) {
    if (menu.classList.contains("showMenu")) {
        x.stopPropagation();
        menu.classList.remove("showMenu");
        xIcon.style.display = "none";
        barsIcon.style.display = "block";
    } else {
        x.stopPropagation();
        menu.classList.add("showMenu");
        xIcon.style.display = "block";
        barsIcon.style.display = "none";
    }
}


window.addEventListener("click", function() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        xIcon.style.display = "none";
        barsIcon.style.display = "block";
    }
})