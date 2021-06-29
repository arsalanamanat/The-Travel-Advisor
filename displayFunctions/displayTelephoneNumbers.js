import { telephoneNumberElement } from '../constants.js';

function displayTelephoneNumbers(countryJsonData) {
  const policeNumber = countryJsonData.telephone.police;
  const ambulanceNumber = countryJsonData.telephone.ambulance;
  telephoneNumberElement.innerText = `Ambulance (${policeNumber})    ||    Police (${ambulanceNumber})`;
}

export default displayTelephoneNumbers;
