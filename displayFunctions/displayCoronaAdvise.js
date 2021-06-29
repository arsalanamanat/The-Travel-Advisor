import { adviseElement, adviseLinkElement } from '../constants.js';

function displayCoronaAdvise(countryJsonData) {
  if (countryJsonData.advise.UA) {
    const adviseText = countryJsonData.advise.UA.advise;
    const adviseLink = countryJsonData.advise.UA.url;
    adviseElement.innerText = `Advise : ${adviseText}`;
    adviseLinkElement.href = adviseLink;
  }
}

export default displayCoronaAdvise;
