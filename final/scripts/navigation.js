// Get the DOM variables
const hamButton = document.getElementById("ham-btn");
const nav = document.getElementById("nav-bar");

// Create a click event listener to make sure the button was clicked
hamButton.addEventListener("click", () => {
    nav.classList.toggle("show");
    hamButton.classList.toggle("show");
});