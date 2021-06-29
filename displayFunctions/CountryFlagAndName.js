import { countryFlagElement, titleElement } from '../constants.js';

function CountryFlagAndName(countryJsonData) {
  if (countryJsonData.names.iso2) {
    const countryFlagIso = countryJsonData.names.iso2.toLowerCase();
    const countryTitle = countryJsonData.names.full;
    countryFlagElement.src = `https://travelbriefing.org/sites/views/default/images/flags/4x3/${countryFlagIso}.svg`;
    titleElement.innerText = countryTitle;
  }
}

export default CountryFlagAndName;
