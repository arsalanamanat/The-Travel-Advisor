import { currencyContainer } from '../constants.js';
import increaseBackgroundOpacity from '../utilities/increaseBackgroundOpacity.js';

function closeCurrencyDivision() {
  currencyContainer.classList.add('hide');
  increaseBackgroundOpacity();
}

export default closeCurrencyDivision;
