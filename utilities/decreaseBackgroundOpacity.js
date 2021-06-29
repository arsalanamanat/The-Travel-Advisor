import { dynamicContainer, staticContainer } from '../constants.js';

function decreaseBackgroundOpacity() {
  dynamicContainer.style.opacity = 0.1;
  staticContainer.style.opacity = 0.1;
}

export default decreaseBackgroundOpacity;
