// Obtain the hamburger button from the DOM
const hamButton = document.getElementById("ham-btn");
const nav = document.getElementById("nav-bar");

// Click event to handle when the ham-btn is clicked
hamButton.addEventListener("click", () => {
    hamButton.classList.toggle("show");
    nav.classList.toggle("show");
});