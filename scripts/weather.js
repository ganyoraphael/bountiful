// WEATHER INFORMATION
const LAT = "33.1574647";
const LON = "-117.342257";
const APIKEY = "dd1c15f9845223a7a99783c584c93af6";
const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${APIKEY}&units=imperial`;

function displayWeather(weatherData) {
  const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;
  const weatherTemp = weatherData.main.temp.toFixed(0);
  const desc = weatherData.weather[0].description;
  const humidity = weatherData.main.humidity.toFixed(0);
  const weatherWindSpeed = weatherData.wind.speed.toFixed(0);

 
  let skyIcon = document.querySelector("#weather-icon");
  skyIcon.setAttribute("src", iconsrc);
  skyIcon.setAttribute("alt", desc);

  
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  let weatherDesc = document.querySelector("#w-description");
  weatherDesc.innerHTML = `${capitalizeFirstLetter(desc)}`;

 
  const tempSpan = document.querySelector("#temp-span");
  tempSpan.innerHTML = `${weatherTemp}`;


  let humidSpan = document.querySelector("#humid-span");
  humidSpan.innerHTML = `${humidity}`;
}

async function getTheWeather() {
  try {
    const response = await fetch(weatherURL);
    if (response.ok) {
      const data = await response.json();
      displayWeather(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

getTheWeather();
