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