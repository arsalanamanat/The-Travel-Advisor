import { CurrencyElement } from '../constants.js';

function displayCurrencyAndCode(countryJsonData) {
  const countryCurrency = countryJsonData.currency.name;
  const currencyCode = countryJsonData.currency.code;
  CurrencyElement.innerText = `${countryCurrency} (${currencyCode})`;
}

export default displayCurrencyAndCode;
