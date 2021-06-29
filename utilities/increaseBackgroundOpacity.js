import { dynamicContainer, staticContainer } from '../constants.js';

function increaseBackgroundOpacity() {
  dynamicContainer.style.opacity = 1;
  staticContainer.style.opacity = 1;
}

export default increaseBackgroundOpacity;
