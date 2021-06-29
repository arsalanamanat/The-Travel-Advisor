import {
  convertBtn,
  currencyContainer,
  currencyResult,
  currencySelectionList,
  inputAmount,
} from '../constants.js';
import lessTheOpacity from '../utilities/lessTheOpacity.js';

function getCurrencyConversion(countryJsonData) {
  lessTheOpacity();
  currencyContainer.classList.remove('hide');
  const currencyList = countryJsonData.currency.compare;
  inputAmount.value = '';
  currencyResult.innerText = '';

  currencyList.forEach((currency) => {
    const currencyNameAndPrice = document.createElement('option');
    currencyNameAndPrice.innerText = currency.name;
    currencyNameAndPrice.value = currency.rate;
    currencySelectionList.appendChild(currencyNameAndPrice);
  });
  currencySelectionList.addEventListener('change', (e) => {
    convertBtn.addEventListener('click', () => {
      currencyResult.innerText =
        (inputAmount.value / countryJsonData.currency.rate) * e.target.value;
    });
  });
}

export default getCurrencyConversion;
