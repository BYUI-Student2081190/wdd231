// Varibles
const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.getElementById("cards");

// Obtain the prophet data
async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets);
};

// Function to display the prophet data
function displayProphets(prophets) {
    prophets.forEach((prophet) => {
        const card = document.createElement("section");
        const fullName = document.createElement("h2");
        const dateOfBirth = document.createElement("p");
        const birthPlace = document.createElement("p");
        const portrait = document.createElement("img");

        // Build the img first
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "440");

        // Build the h2
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        // Build the birth elements
        dateOfBirth.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;

        // Append them
        card.appendChild(fullName);
        card.appendChild(dateOfBirth);
        card.appendChild(birthPlace);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
};

getProphetData();