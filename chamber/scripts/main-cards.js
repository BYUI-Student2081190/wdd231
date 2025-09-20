// Obtain the needed variables at the start
import { getData } from "./data.mjs";

// Get the data to be used for the cards on the home page
const data = await getData();

// Obtain the DOM variables
const homeCard = document.getElementById("homeContainer");

// Function to filter out the recived data
function filterData()
{
    // Filter the data and save it to a returnable variable
    const filteredData = data.members.filter(member => member.membershiplevel > 1);
    return filteredData;
};

function getRandomMembers(members)
{
    // Set the min and the max for the random number generator
    const min = 0;
    const max = members.length - 1; // This allows us to get indexs of members in the list

    // List to hold the current numbers done already
    let currentNums = [];

    // Condition breaker for while loop
    let loopBreak = false;

    // Loop through the sorted list and get the random ids of the objects
    while (loopBreak === false) {
        // Check the length of currentNums first
        if (currentNums.length < 3) {
            // Start by getting a random number
            const number = Math.floor(Math.random() * (max - min + 1)) + min;

            // Check and see if number is already in the list
            if (!currentNums.includes(number)){
                // Then add it to the list
                currentNums.push(number);
            }; // Else do nothing a loop again
        } else {
            // Break the loop
            loopBreak = true;
        };
    };

    // Now filter the list to only have the members selected randomly
    const currentMembers = members.filter((_member, index) => {
        return currentNums.includes(index);
    });

    // Return the current members
    return currentMembers;
};

// Function to display the members
function displayCards() {
    // If data returns as falsey handle it, if not do what needs to be done
    if (!data) {
        // Create an error message for the viewer and allow them to know it is a problem on our end
        const warning = document.createElement('p');
        warning.textContent = "There was a problem loading the Spotlights on our end. Please come back again later!"
        homeCard.appendChild(warning);
    } else {
        // Filter the data
        const filteredMembers = filterData();
        const members = getRandomMembers(filteredMembers);

        // Loop through the members and create their cards to add to the site
        members.forEach(member => {
            // Create a card
            const card = document.createElement('div');
            const top = document.createElement('div');
            const bottom = document.createElement('div');
            const name = document.createElement('h2');
            const email = document.createElement('p');
            const phone = document.createElement('p');
            const url = document.createElement('p');
            const img = document.createElement('img');

            // Add classes
            card.classList.add("spotlight");
            top.classList.add("top");
            bottom.classList.add("bottom");

            // Add data to elements
            name.textContent = `${member.name}`;
            email.innerHTML = `<b>Email:</b> ${member.email}`;
            phone.innerHTML = `<b>Phone:</b> ${member.phone}`;
            url.innerHTML = `<b>URL:</b> <a href="#">${member.url}</a>`;
            img.setAttribute("src", member.image);
            img.setAttribute("alt", member.name);
            img.setAttribute("width", 300);
            img.setAttribute("height", 300);
            img.setAttribute("fetchpriority", "high");

            // Add them to the right divs
            top.appendChild(name);

            bottom.appendChild(img);
            bottom.appendChild(email);
            bottom.appendChild(phone);
            bottom.appendChild(url);

            card.appendChild(top);
            card.appendChild(bottom);

            // Append card to section
            homeCard.appendChild(card);
        });
    };
};

// Starting Call
displayCards();
