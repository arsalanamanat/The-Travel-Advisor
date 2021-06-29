import { dynamicContainer, staticContainer } from '../constants.js';

function increaseTheOpacity() {
  dynamicContainer.style.opacity = 1;
  staticContainer.style.opacity = 1;
}

export default increaseTheOpacity;
