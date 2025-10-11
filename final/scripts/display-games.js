// Import the function to get the data
import { getGames } from "./videogames.mjs";

// Obtain the container for all the game data
const container = document.getElementById("videogameContainer");
const gameDetails = document.getElementById("gameDetails");

// Get the data to use
const data = await getGames();

// Now create an if statement to adjust what is placed in the container based on what is recieved
if (!data) {
    // This has come back as null and must be handled
    const p = document.createElement("p");
    container.classList.add("error");
    p.textContent = "There was an error getting data from our database, this is on our end and we are working to fix it. Please come back later!";
    container.appendChild(p);
} else {
    // Data is good and we can use it to populate the page
    data.videogamedata.forEach(game => {
        // Create the cards for each game and edit them as seen fit
        const card = document.createElement("div");
        const img = document.createElement("img");
        const title = document.createElement("h2");
        const button = document.createElement("button");

        // Add the specific data to the elements
        img.setAttribute("src", game.image);
        img.setAttribute("alt", `Image of ${game.title}`);
        img.setAttribute("width", 300);
        img.setAttribute("height", 300);
        // Add lazyload here later...

        title.textContent = game.title;

        button.textContent = "See Full Details";
        button.setAttribute("aria-label", "Open Full Game Details.");

        // Add an event listener to the button to open the modal
        button.addEventListener("click", () => {
            // Create the elements inside the modal and then open it
            const detailsTitle = document.createElement("span");
            const detailsImg = document.createElement("img");
            const desc = document.createElement("p");
            const genre = document.createElement("p");
            const players = document.createElement("p");
            const rating = document.createElement("p");
            const pub = document.createElement("p");
            const dev = document.createElement("p");
            const relDate = document.createElement("p");
            const closeButton = document.createElement("button");

            // Append the data needed to the elements
            detailsTitle.textContent = game.title;
            detailsTitle.classList.add("details-title");

            detailsImg.setAttribute("src", game.image);
            detailsImg.setAttribute("alt", `Image of ${game.title}`);
            detailsImg.setAttribute("width", 300);
            detailsImg.setAttribute("height", 300);

            desc.textContent = game.description;

            genre.textContent = `Genre: ${game.genre}`;

            players.textContent = `No. Players: ${game.players}`;

            rating.textContent = `Age Rating: ${game.ageRating}`;

            pub.textContent = `Publisher: ${game.publisher}`;

            dev.textContent = `Developer: ${game.developer}`;

            relDate.textContent = `Release Date: ${game.releaseDate}`;

            closeButton.textContent = "X";
            closeButton.setAttribute("aria-label", "Close Game Details");

            // Add another event listener to close the modal and delete the children on the button
            closeButton.addEventListener("click", () => {
                // Close the modal
                gameDetails.close();

                // Remove the children
                gameDetails.replaceChildren();
            });

            // Now append all the elements to the modal
            gameDetails.appendChild(closeButton);
            gameDetails.appendChild(detailsTitle);
            gameDetails.appendChild(detailsImg);
            gameDetails.appendChild(desc);
            gameDetails.appendChild(genre);
            gameDetails.appendChild(players);
            gameDetails.appendChild(rating);
            gameDetails.appendChild(pub);
            gameDetails.appendChild(dev);
            gameDetails.appendChild(relDate);

            // Now open the modal with the info inside
            gameDetails.showModal();
        });

        // Add the elements to the card
        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(button);

        // Add the card to the container
        container.appendChild(card);
    });
};