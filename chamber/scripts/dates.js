// Get the DOM variables
const yearDisplay = document.getElementById("currentYear");
const lastModDisplay = document.getElementById("lastModDate");

// Create a date object
const newDate = new Date();
const currentYear = newDate.getFullYear();

// Get the last mod date
const lastModifiedDate = new Date(document.lastModified);
const lastModYear = lastModifiedDate.getFullYear();
const lastModMonth = lastModifiedDate.getMonth() + 1;
const lastModDay = lastModifiedDate.getDate();
const lastModHour = lastModifiedDate.getHours();
const lastModMin = lastModifiedDate.getMinutes();
const lastModSec = lastModifiedDate.getSeconds();

// Set the text content
yearDisplay.textContent = currentYear;
lastModDisplay.textContent = `${lastModMonth}/${lastModDay}/${lastModYear} ${lastModHour}:${lastModMin}:${lastModSec}`;

// Get the DOM variables
const visiterMessage = document.getElementById("visitMessage");
const lastVisit = Number(localStorage.getItem("visit"));

// Check to see if the first visit has happened or not
if (!lastVisit) {
    // This is the first visit
    const now = Date.now();
    localStorage.setItem("visit", now); // Set the first visit to the current day in miliseconds
    visiterMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
    // This is a second visit, check to see what the message looks like now
    
    // This is not the same day
    const daysOfLastVisit = Math.floor((Date.now() - lastVisit) / 86400000);
    // Check if the daysOfLastVisit is 1
    if (daysOfLastVisit === 0)
    {
        visiterMessage.textContent = `Back so soon! Awesome!`;
    } else if (daysOfLastVisit === 1) {
        visiterMessage.textContent = `You last visited ${daysOfLastVisit} day ago.`;
    } else {
        visiterMessage.textContent = `You last visited ${daysOfLastVisit} days ago.`;
    };

    // Set the lastVisit to now
    const now = Date.now();
    localStorage.setItem("visit", now);
}