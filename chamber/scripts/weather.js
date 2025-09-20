// Get the DOM variables
const currWeather = document.getElementById("currWeather");
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=40.60989755866162&lon=-111.93766732727337&units=imperial&appid=a32e387524432e5aff27fccd2f59383f';

// Obtain the data from the url
async function getWeatherData(url)
{
    try
    {
        const response = await fetch(url);
        const data = await response.json();
        generateWeatherData(data);
    } catch {
        generateWeatherData(null);
    };
};

function generateWeatherData(data)
{
    // Start with this first
    const h2 = document.createElement('h2');
    const bottom = document.createElement('div');
    bottom.classList.add("weatherBottom");
    h2.textContent = "Current Weather";
    currWeather.appendChild(h2);

    // test if data is ok if not error message if so add it
    if (!data) {
        // Create an error message for the viewer and allow them to know it is a problem on our end
        const warning = document.createElement('p');
        warning.textContent = "There was a problem loading the Spotlights on our end. Please come back again later!"
        bottom.appendChild(warning);
        currWeather.appendChild(bottom);
    } else {
        // Save the data
        const img = document.createElement('img');
        const info = document.createElement('div');
        const temp = document.createElement('p');
        const weatherDes = document.createElement('p');
        const high = document.createElement('p');
        const low = document.createElement('p');
        const humidity = document.createElement('p');

        // Set the data
        img.setAttribute("src", `https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
        img.setAttribute("alt", data.weather[0].description);
        img.setAttribute("width", 50);
        img.setAttribute("height", 50);
        temp.innerHTML = `<b>${data.main.temp}&deg;</b> F`;
        weatherDes.textContent = `${data.weather[0].description}`;
        high.innerHTML = `High: ${data.main.temp_max}&deg;`;
        low.innerHTML = `Low: ${data.main.temp_min}&deg;`;
        humidity.textContent = `Humidity: ${data.main.humidity}%`;
        info.classList.add("weatherInfo");
        weatherDes.classList.add("weatherDes");

        // Add everything to the bottom div
        info.appendChild(temp);
        info.appendChild(weatherDes);
        info.appendChild(high);
        info.appendChild(low);
        info.appendChild(humidity);

        bottom.appendChild(img);
        bottom.appendChild(info);

        // Save to the right divs
        currWeather.appendChild(bottom);
    };
};

const weatherData = getWeatherData(weatherUrl);