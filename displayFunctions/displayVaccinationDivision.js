import {
  countryVaccinationsElement,
  vaccinationBtn,
  vaccinationCloseBtn,
} from '../constants.js';
import closeVaccinationWindow from './eventListeners/closeVaccinationWindow.js';
import showVaccinationWindow from './eventListeners/showVaccinationWindow.js';

function displayVaccinationDivision(countryJsonData) {
  countryVaccinationsElement.innerHTML = '';
  const countryVaccinationArray = countryJsonData.vaccinations;
  if (countryVaccinationArray.length != 0) {
    countryVaccinationArray.forEach((vac) => {
      const vaccinationName = document.createElement('li');
      vaccinationName.classList.add('vaccination-name');

      const vaccinationMessage = document.createElement('p');
      vaccinationMessage.classList.add('vaccination-message');
      vaccinationName.innerText = `${vac.name}`;
      vaccinationMessage.innerText = `${vac.message}`;

      countryVaccinationsElement.appendChild(vaccinationName);
      countryVaccinationsElement.appendChild(vaccinationMessage);

      vaccinationBtn.addEventListener('click', showVaccinationWindow);
      vaccinationCloseBtn.addEventListener('click', closeVaccinationWindow);
    });
  }
}

export default displayVaccinationDivision;
