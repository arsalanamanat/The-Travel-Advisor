import { currencyContainer } from '../constants.js';
import increaseTheOpacity from '../utilities/increaseTheOpacity.js';

function closeCurrencyDivision() {
  currencyContainer.classList.add('hide');
  increaseTheOpacity();
}

export default closeCurrencyDivision;
