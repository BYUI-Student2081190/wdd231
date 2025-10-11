// Export the function that obtains the data from the api, return null if an error happens
export async function getGames() {
    try
    {
        // Access the game json data
        const url = 'https://byui-student2081190.github.io/wdd231/final/data/videogames.json';
        // Give us the data
        const response = await fetch(url);
        const data = await response.json();
        // Return the requested data
        return data;
    } catch {
        // If it fails we want it to come back as null so we can tell the user something happened on our end
        return null;
    }
};