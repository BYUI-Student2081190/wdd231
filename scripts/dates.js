// Obtain DOM variables
const currentYearSpan = document.getElementById("currentYear");
const lastModSpan = document.getElementById("lastmod");

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