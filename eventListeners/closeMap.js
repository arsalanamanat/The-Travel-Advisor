import { mapContainer } from '../constants.js';
import increaseTheOpacity from '../utilities/increaseTheOpacity.js';

function closeMap() {
  mapContainer.classList.add('hide');
  increaseTheOpacity();
}

export default closeMap;
