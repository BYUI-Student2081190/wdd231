// Obtain the DOM variables
const currYear = document.getElementById("currYear");
const lastMod = document.getElementById("lastMod");

// Get the date object
const today = new Date();

// Set currYear to be the current year
currYear.textContent = today.getFullYear();

// Get the last mod date
const lastModified = document.lastModified;
const lastModifiedDate = new Date(lastModified);

lastMod.textContent = `${lastModifiedDate.getMonth() + 1}|${lastModifiedDate.getDate()}|${lastModifiedDate.getFullYear()}  ${lastModifiedDate.getHours()}:${lastModifiedDate.getMinutes()}:${lastModifiedDate.getSeconds()}`;