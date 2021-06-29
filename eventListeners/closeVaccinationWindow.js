import { vaccinationContainer } from '../constants.js';
import increaseBackgroundOpacity from '../utilities/increaseBackgroundOpacity.js';

function closeVaccinationWindow() {
  increaseBackgroundOpacity();
  vaccinationContainer.classList.add('hide');
  vaccinationContainer.classList.add('animation');
}

export default closeVaccinationWindow;
