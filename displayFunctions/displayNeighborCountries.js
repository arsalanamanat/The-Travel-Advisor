import { neighborCountriesElement } from '../constants.js';

function displayNeighborCountries(countryJsonData) {
  neighborCountriesElement.innerText = '';
  const neighborCountries = countryJsonData.neighbors;
  neighborCountries.forEach((country) => {
    const neighborCountriesList = document.createElement('li');
    neighborCountriesList.innerText = country.name;
    neighborCountriesElement.appendChild(neighborCountriesList);
  });
}

export default displayNeighborCountries;
