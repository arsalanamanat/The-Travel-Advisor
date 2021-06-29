import { vaccinationContainer } from '../constants.js';
import decreaseBackgroundOpacity from '../utilities/decreaseBackgroundOpacity.js';

function showVaccinationWindow() {
  vaccinationContainer.classList.remove('hide');
  decreaseBackgroundOpacity();
}

export default showVaccinationWindow;
