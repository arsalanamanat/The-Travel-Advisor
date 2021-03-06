import {
  viewMapButton,
  mapCloseBtn,
  currencyConverterBtn,
  currencyCloseBtn,
  weatherButton,
  nextBtn,
  previousBtn,
} from './constants.js';

import closeMap from './eventListeners/closeMap.js';
import closeCurrencyDivision from './eventListeners/closeCurrencyDivision.js';
import goToNextPage from './eventListeners/goToNextPage.js';
import goToPreviousPage from './eventListeners/goToPreviousPage.js';
import showWeatherDivision from './eventListeners/showWeatherDivision.js';
import fetchApi from './FetchAPi.js';
import getCurrencyConversion from './eventListeners/getCurrencyConversion.js';
import showTheMap from './displayFunctions/showTheMap.js';
import CountryFlagAndName from './displayFunctions/countryFlagAndName.js';
import displayLanguages from './displayFunctions/displayLanguages.js';
import displayCurrencyAndCode from './displayFunctions/displayCurrencyAndCode.js';
import displayCoronaAdvise from './displayFunctions/DisplayCoronaAdvise.js';
import displayTimeZone from './displayFunctions/displayTimeZone.js';
import displayNeighborCountries from './displayFunctions/displayNeighborCountries.js';
import displayVaccinationDivision from './displayFunctions/displayVaccinationDivision.js';
import displayTelephoneNumbers from './displayFunctions/displayTelephoneNumbers.js';
import displayElectricity from './displayFunctions/displayElectricity.js';

async function fetchCountryData(countryName) {
  //fetching individual Country data and converting into json format
  const countryResponseData = await fetchApi(
    `https://travelbriefing.org/${countryName}?format=json`,
  );
  const countryJsonData = await countryResponseData.json();

  displayCoronaAdvise(countryJsonData); // Display Corona Advise Element to Travel Countries

  CountryFlagAndName(countryJsonData); // Display Flag and Country Name

  displayLanguages(countryJsonData); // Display Languages

  displayCurrencyAndCode(countryJsonData); // Display Currency and Code

  displayTimeZone(countryJsonData); // Display Time Zone

  displayNeighborCountries(countryJsonData); //Display Neighbor Countries

  displayTelephoneNumbers(countryJsonData); // Display Telephone Numbers

  displayElectricity(countryJsonData); // Display Electricity

  displayVaccinationDivision(countryJsonData); // Display Vaccination Division

  /* -------------------------------------------------------- Dynamic Container Header Buttons-----------------------------------------------------------
  Convert The Currency */

  currencyConverterBtn.addEventListener('click', () => {
    getCurrencyConversion(countryJsonData);
  });
  currencyCloseBtn.addEventListener('click', closeCurrencyDivision);

  // View Map
  viewMapButton.addEventListener('click', () => {
    showTheMap(countryJsonData);
  });
  mapCloseBtn.addEventListener('click', closeMap);

  // Weather Data Here
  weatherButton.addEventListener('click', () => {
    showWeatherDivision(countryName);
  });

  nextBtn.addEventListener('click', goToNextPage); // Container Next Button
  previousBtn.addEventListener('click', goToPreviousPage); // Previous Button
}
// ---------------------------------------------------------------------------------------------------------------------------------------------

export default fetchCountryData;
