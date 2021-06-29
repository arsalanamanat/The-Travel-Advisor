import { vaccinationContainer } from '../constants.js';
import increaseTheOpacity from '../utilities/increaseTheOpacity.js';

function closeVaccinationWindow() {
  increaseTheOpacity();
  vaccinationContainer.classList.add('hide');
  vaccinationContainer.classList.add('animation');
}

export default closeVaccinationWindow;
