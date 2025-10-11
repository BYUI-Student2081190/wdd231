// Import the function to get the data
import { getGames } from "./videogames.mjs";

// Get the DOM Variable to use
const card = document.getElementById("gameCard");

// Get the data to use
const data = await getGames();

// Function to get a random number to use in the code
function getRandomIndex(dataLength) {
    const min = 0;
    const max = Math.floor(dataLength - 1); // Subtract 1 so it is the real amount of indexes

    console.log(max);

    // return the random number
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Check the data to see if it came in ok if so use it
if (!data) {
    // This has come back as null and must be handled
    const p = document.createElement("p");
    card.classList.add("error");
    p.textContent = "There was an error getting data from our database, this is on our end and we are working to fix it. Please come back later!";
    card.appendChild(p);
} else {
    // The data is okay to use and we can select a random object to display here
    const index = getRandomIndex(data.videogamedata.length);

    // Find the object with this index
    const game = data.videogamedata.at(index);

    // Create the elements for the card
    const title = document.createElement("p");
    const img = document.createElement("img");

    title.textContent = game.title;

    img.setAttribute("src", game.image);
    img.setAttribute("alt", `Image of ${game.title}`);
    img.setAttribute("width", 300);
    img.setAttribute("height", 300);

    // Add the title and img to the card
    card.appendChild(title);
    card.appendChild(img);
};