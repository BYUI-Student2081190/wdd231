// Function to get the data from the api
export async function getData() {
    try
    {
        // Access the json data
        const url = 'https://byui-student2081190.github.io/wdd231/chamber/data/data.json';
        // Give us the data
        const response = await fetch(url);
        const data = await response.json();
        // Return the requested data
        return data;
    } catch {
        // Default to null so the next part will let us know of the error
        return null;
    }
};