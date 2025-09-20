// Import the function from data
import { getData } from "./data.mjs";

// Get the data from getDaata
const data = await getData();

// Get the DOM elements
const container = document.getElementById("dirContainer");
const gridButton = document.getElementById("gridButton");
const listButton = document.getElementById("listButton");

// Now create the display functions
function displayGridMembers(members) {
    // Before we begin, remove all the objects from the container
    container.replaceChildren()

    // Check to see if an error happened, members must come in populated
    if (members && members.length > 0) {
        members.forEach((member) => {
            const card = document.createElement("div");
            const name = document.createElement("p");
            const address = document.createElement("p");
            const phone = document.createElement("p");
            const memberUrl = document.createElement("a");
            const img = document.createElement("img");

            name.textContent = member.name;
            address.textContent = member.address;
            phone.textContent = member.phone;
            memberUrl.textContent = member.url;
            memberUrl.setAttribute("href", "#");
            img.setAttribute("src", member.image);
            img.setAttribute("alt", member.name);
            img.setAttribute("width", 300);
            img.setAttribute("height", 300);
            img.setAttribute("fetchpriority", "high");

            card.classList.add("gridMember");
            card.appendChild(img);
            card.appendChild(name);
            card.appendChild(address);
            card.appendChild(phone);
            card.appendChild(memberUrl);

            container.appendChild(card);
            // Update the container class list
            container.classList.remove("list");
            container.classList.add("grid");
        });
    } else {
        const card = document.createElement("div");
        const errorMessage = document.createElement("p");

        errorMessage.textContent = "Sorry, there is an error with the site. Please come back later.";
        card.classList.add("errorCard");

        card.appendChild(errorMessage);
        container.appendChild(card);
    };
};

function displayListMembers(members) {
    // Before we begin, remove all the objects from the container
    container.replaceChildren()

    // Check to see if an error happened, members must come in populated
    if (members && members.length > 0) {
        // Create a table to hold the list elements
        const ul = document.createElement("ul");
        members.forEach((member) => {
            const card = document.createElement("li");
            const name = document.createElement("p");
            const address = document.createElement("p");
            const phone = document.createElement("p");
            const memberUrl = document.createElement("a");

            name.textContent = member.name;
            address.textContent = member.address;
            phone.textContent = member.phone;
            memberUrl.textContent = member.url;
            memberUrl.setAttribute("href", "#");

            card.classList.add("listMember");
            card.appendChild(name);
            card.appendChild(address);
            card.appendChild(phone);
            card.appendChild(memberUrl);

            ul.appendChild(card);
            // Update the container class list
            container.classList.add("list");
            container.classList.remove("grid");
        });

        container.appendChild(ul);
    } else {
        const card = document.createElement("div");
        const errorMessage = document.createElement("p");

        errorMessage.textContent = "Sorry, there is an error with the site. Please come back later.";
        card.classList.add("errorCard");

        card.appendChild(errorMessage);
        container.appendChild(card);
    };
};

// Call this funtion first
displayGridMembers(data.members);

// Now create the click events
gridButton.addEventListener("click", () => {
    gridButton.classList.add("buttonActive");
    listButton.classList.remove("buttonActive");
    // Call get data
    displayGridMembers(data.members);
});

listButton.addEventListener("click", () => {
    gridButton.classList.remove("buttonActive");
    listButton.classList.add("buttonActive");
    // Call get data
    displayListMembers(data.members);
});