import { mapContainer } from '../constants.js';
import increaseBackgroundOpacity from '../utilities/increaseBackgroundOpacity.js';

function closeMap() {
  mapContainer.classList.add('hide');
  increaseBackgroundOpacity();
}

export default closeMap;
