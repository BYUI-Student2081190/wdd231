// Obtain the DOM variables
const section = document.getElementById("discoverSection");

// Function to get the data from the api
async function getDiscoveries() {
    try 
    {
        // Get the URL and access the data
        const url = "https://byui-student2081190.github.io/wdd231/chamber/data/discover.json";

        const response = await fetch(url);
        const data = await response.json();

        createDiscoverCards(data.interests);
    } catch {
        // Return null to handle if data could not be returned
        createDiscoverCards(null);
    }
};

// Create the cards for the discover page
function createDiscoverCards(data) {
    if (!data) {
        const errorMessage = document.createElement("h2");
        errorMessage.textContent = "Sorry we are having an error on our end, please come back again later!";
        // Change the section class to display the error.
        section.classList.remove("discoverGrid");
        section.classList.add("discoverError");
        section.appendChild(errorMessage);
    } else {
        // Counter to start adding Lazy Load
        let counter = 0;
        // Create new cards per data element
        data.forEach(item => {
            // Create div
            const card = document.createElement("div");
            const itemName = document.createElement("h2");
            const itemFigure = document.createElement("figure");
            const itemImg = document.createElement("img");
            const itemFigCap = document.createElement("figcaption");
            const itemAddress = document.createElement("address");
            const itemDesc = document.createElement("p");
            const itemButton = document.createElement("button");

            // Add data
            itemName.textContent = item.name;
            itemImg.setAttribute("src", item.image);
            itemImg.setAttribute("width", 300);
            itemImg.setAttribute("height", 200);
            itemImg.setAttribute("alt", item.name);
            if (counter >= 2) {
                // Start adding lazy
                itemImg.setAttribute("loading", "lazy");
            };
            itemFigCap.textContent = `Image for ${item.name}`;
            itemDesc.textContent = item.descript;
            itemAddress.textContent = item.address;
            itemButton.textContent = "Learn More";
            itemButton.setAttribute("aria-label", "Learn More Button.");

            // Append Children
            itemFigure.appendChild(itemImg);
            itemFigure.appendChild(itemFigCap);

            card.appendChild(itemName);
            card.appendChild(itemFigure);
            card.appendChild(itemAddress);
            card.appendChild(itemDesc);
            card.appendChild(itemButton);

            section.appendChild(card);

            // Add to counter
            counter += 1;
        });
    }
};

// Initial Function Call
getDiscoveries();