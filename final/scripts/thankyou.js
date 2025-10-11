// Get the local storage
const subCount = Number(localStorage.getItem("submits"));

// Get the span tag
const span = document.getElementById("requestCount");

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

// Get the DOM variable
const card = document.getElementById("thankYouCard");

// Obtian the data from the url
const formData = new URLSearchParams(window.location.search);

card.innerHTML = `
<h2>Thank you, ${formData.get("firstName") ? `${formData.get("firstName")}` : ""} ${formData.get("lastName") ? `${formData.get("lastName")}` : ""} for your contribution!</h2>
<p>We will look for the game, "${formData.get("title")}."</p>
<p>The publisher is ${formData.get("publisher")}.</p>
${formData.get("releaseDate") ? `<p>The release date is ${formData.get("releaseDate")}.</p>` : ""}
${formData.get("gameDescription") ? `<p>Here is your description of the game: ${formData.get("gameDescription")}</p>` : ""}
<p>If we have any questions we will ask you at: ${formData.get("email")}</p>
`;