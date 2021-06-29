import { dynamicContainer, staticContainer } from '../constants.js';

function lessTheOpacity() {
  dynamicContainer.style.opacity = 0.1;
  staticContainer.style.opacity = 0.1;
}

export default lessTheOpacity;
