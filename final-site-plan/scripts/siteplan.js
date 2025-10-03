// Get the DOM variables for the modals
const dialogOneClose = document.getElementById("scenarioDisplayCloseOne");
const dialogTwoClose = document.getElementById("scenarioDisplayCloseTwo");
const dialogOneOpen = document.getElementById("scenarioOneButton");
const dialogTwoOpen = document.getElementById("scenarioTwoButton");
const dialogOne = document.getElementById("scenarioOneDisplay");
const dialogTwo = document.getElementById("scenarioTwoDisplay");

// Create click events
dialogOneOpen.addEventListener("click", () => {
    dialogOne.showModal();
});

dialogTwoOpen.addEventListener("click", () => {
    dialogTwo.showModal();
});

dialogOneClose.addEventListener("click", () => {
    dialogOne.close();
});

dialogTwoClose.addEventListener("click", () => {
    dialogTwo.close();
});

// Get DOM for the date object in footer
const currentYearSpan = document.getElementById("currentYear");
const lastModSpan = document.getElementById("modDate");

// Get the current date
const currentDate = new Date();
const currentYear = currentDate.getFullYear(); // For copyright

// Get the last modified date
const lastModifiedDate = new Date(document.lastModified);
const lastModYear = lastModifiedDate.getFullYear();
const lastModMonth = lastModifiedDate.getMonth() + 1;
const lastModDay = lastModifiedDate.getDate();
const lastModHour = lastModifiedDate.getHours();
const lastModMin = lastModifiedDate.getMinutes();
const lastModSec = lastModifiedDate.getSeconds();

// Set the text content of both span tags
currentYearSpan.textContent = currentYear;
lastModSpan.textContent = `${lastModMonth}/${lastModDay}/${lastModYear} ${lastModHour}:${lastModMin}:${lastModSec}`;