import { vaccinationContainer } from '../constants.js';
import lessTheOpacity from '../utilities/lessTheOpacity.js';

function showVaccinationWindow() {
  vaccinationContainer.classList.remove('hide');
  lessTheOpacity();
}

export default showVaccinationWindow;
