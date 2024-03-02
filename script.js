document.addEventListener("DOMContentLoaded", function() {
    let aboutLink = document.getElementById("aboutButton");
    let aboutSection = document.querySelector(".main_about_section");

    aboutLink.addEventListener("click", function(event) {
        event.preventDefault();
        aboutSection.scrollIntoView({ behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let skillsbutton = document.getElementById("skillsbutton");
    let sectskills = document.querySelector(".main_skills_section");

    skillsbutton.addEventListener("click", function(event) {
        event.preventDefault();
        sectskills.scrollIntoView({ behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let projectsbutton = document.getElementById("projectsbutton");
    let sectprojects = document.querySelector(".main_projects_section");

    projectsbutton.addEventListener("click", function(event) {
        event.preventDefault();
        sectprojects.scrollIntoView({ behavior: "smooth" });
    });
});

