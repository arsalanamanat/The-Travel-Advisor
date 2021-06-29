import { weatherContainer } from '../constants.js';
import increaseTheOpacity from '../utilities/increaseTheOpacity.js';
import lessTheOpacity from '../utilities/lessTheOpacity.js';

async function showWeatherDivision(countryName) {
  weatherContainer.classList.remove('hide');
  lessTheOpacity();

  const weatherResponse = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=4b9b98b51c3f436e8a574149212606&q=${countryName.split(
      '_',
    )}&days=08&aqi=no&alerts=no`,
  );
  const weatherJsonData = await weatherResponse.json();

  const weatherDataBody = document.getElementById('weatherData');
  weatherDataBody.innerText = '';
  const weatherCloseButton = document.querySelector('.weather-close-button');
  const weatherLastUpdateDateValue = weatherJsonData.current.last_updated;

  const weatherDateElement = document.createElement('p');
  weatherDateElement.classList.add('weather-date');
  weatherDateElement.innerText = `Last Updated : ${weatherLastUpdateDateValue}`;
  const weatherIcon = weatherJsonData.current.condition.icon;

  const weatherImageElement = document.createElement('img');
  weatherImageElement.classList.add('weather-icon');
  weatherImageElement.src = weatherIcon;

  const weatherCountryNameElement = document.createElement('h2');
  weatherCountryNameElement.classList.add('weather-country-name');
  weatherCountryNameElement.innerText = '';
  const weatherCountryValue = weatherJsonData.location.country;
  const weatherCityValue = weatherJsonData.location.name;
  weatherCountryNameElement.innerText = `${weatherCountryValue} : ${weatherCityValue}`;

  const weatherTemperatureValue = weatherJsonData.current.temp_c;
  const weatherConditionValue = weatherJsonData.current.condition.text;
  const weatherTemperatureElement = document.createElement('h3');
  weatherTemperatureElement.classList.add('weather-temperature');
  weatherTemperatureElement.innerText = '';
  weatherTemperatureElement.innerText = `Condition: ${weatherConditionValue} | Temp :  ${weatherTemperatureValue} C `;

  const weatherWindValue = weatherJsonData.current.wind_kph;
  const weatherWindElement = document.createElement('p');
  weatherWindElement.innerText = `Wind Pressure : ${weatherWindValue} Kilo Per Hour`;

  weatherDataBody.appendChild(weatherDateElement);
  weatherDataBody.appendChild(weatherImageElement);
  weatherDataBody.appendChild(weatherCountryNameElement);
  weatherDataBody.appendChild(weatherTemperatureElement);
  weatherDataBody.appendChild(weatherWindElement);

  weatherCloseButton.addEventListener('click', () => {
    weatherContainer.classList.add('hide');
    increaseTheOpacity();
  });
}

export default showWeatherDivision;
