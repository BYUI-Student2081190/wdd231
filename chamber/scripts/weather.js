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
        console.log(data); // Testing only
        generateWeatherData(data);
    } catch {
        generateWeatherData(null);
    };
};

function generateWeatherData(data)
{
    // Save the data
    const h2 = document.createElement('h2');
    const img = document.createElement('img');
    const div = document.createElement('div');
    const temp = document.createElement('p');
    const weatherDes = document.createElement('p');
    const high = document.createElement('p');
    const low = document.createElement('p');
    const humidity = document.createElement('p');

    // Set the data
    h2.textContent = "Current Weather";
    img.setAttribute("src", `https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
    img.setAttribute("alt", data.weather[0].description);
    img.setAttribute("width", 50);
    img.setAttribute("height", 50);
    temp.innerHTML = `<b>${data.main.temp}&deg;</b> F`;
    weatherDes.textContent = `${data.weather[0].description}`;
    high.innerHTML = `High: ${data.main.temp_max}&deg;`;
    low.innerHTML = `Low: ${data.main.temp_min}&deg;`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;

    weatherDes.classList.add("weatherDes");

    // Add everything to the div
    div.appendChild(temp);
    div.appendChild(weatherDes);
    div.appendChild(high);
    div.appendChild(low);
    div.appendChild(humidity);

    // Save to the right divs
    currWeather.appendChild(h2);
    currWeather.appendChild(img);
    currWeather.appendChild(div);
};

const weatherData = getWeatherData(weatherUrl);