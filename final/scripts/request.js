// Get the DOM variable
const span = document.getElementById("requestCount");
const form = document.getElementById("requestForm");

// Get the local storage
const subCount = Number(localStorage.getItem("submits"));

// Check to see if it comes back empty
if (!subCount) {
    span.textContent = "You have not submitted any requests yet! Try one out!";
} else {
    // This means it has been used before display the requests
    if (subCount === 1) 
    {
        span.textContent = `You have submitted ${subCount} request!`;
    } else {
        span.textContent = `You have submitted ${subCount} requests!`;
    }
};

// Create an event handler that checks if the form was submitted
form.addEventListener("submit", () => {
    // Set the localStorage
    if (!subCount) 
    {
        localStorage.setItem("submits", 1);
    } else {
        const currentCount = subCount + 1;
        localStorage.setItem("submits", currentCount);
    };
});