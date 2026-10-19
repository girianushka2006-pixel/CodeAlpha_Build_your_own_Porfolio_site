console.log("Welcome to Anushka Giri's Portfolio!");

const projects = document.querySelectorAll(".project");

projects.forEach(function(project) {
    project.addEventListener("click", function() {
        alert("You selected: " + project.querySelector("h3").textContent);
    });
});