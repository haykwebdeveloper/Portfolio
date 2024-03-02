// let button = true

// menuBtn.addEventListener("click", () => {
//     if (button == true) {
//         list.style.display = "block";
//         button = !button
//         document.querySelector("body").style.overflow = "hidden"
//     } else {
//         list.style.display = "none"
//         button = !button
//         document.querySelector("body").style.overflow = "scroll"
//     }
// })

document.addEventListener("DOMContentLoaded", function () {
    let menuBtn = document.getElementById("menuBtn");
    let list = document.getElementById("list");
    let button = true;

    menuBtn.addEventListener("click", () => {
        list.classList.toggle("visible");
        button = !button;
        document.getElementById("body").style.overflow = button ? "scroll" : "hidden";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let projectsbutton = document.getElementById("scroll");
    let sectprojects = document.querySelector(".footerin");

    projectsbutton.addEventListener("click", function(event) {
        event.preventDefault();
        sectprojects.scrollIntoView({ behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let projectsbutton = document.getElementById("switch");
    let sectprojects = document.querySelector("header");

    projectsbutton.addEventListener("click", function(event) {
        event.preventDefault();
        sectprojects.scrollIntoView({ behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let projectsbutton = document.getElementById("home");
    let sectprojects = document.querySelector("header");

    projectsbutton.addEventListener("click", function(event) {
        event.preventDefault();
        sectprojects.scrollIntoView({ behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let projectsbutton = document.getElementById("work");
    let sectprojects = document.querySelector(".sect2");

    projectsbutton.addEventListener("click", function(event) {
        event.preventDefault();
        sectprojects.scrollIntoView({ behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let projectsbutton = document.getElementById("testemo");
    let sectprojects = document.querySelector(".sect3");

    projectsbutton.addEventListener("click", function(event) {
        event.preventDefault();
        sectprojects.scrollIntoView({ behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let projectsbutton = document.getElementById("contact");
    let sectprojects = document.querySelector(".sect4");

    projectsbutton.addEventListener("click", function(event) {
        event.preventDefault();
        sectprojects.scrollIntoView({ behavior: "smooth" });
    });
});

