import { languageElement } from '../constants.js';

function displayLanguages(countryJsonData) {
  languageElement.innerText = 'Spoken Language';
  const countryLanguageArray = countryJsonData.language;

  if (countryLanguageArray.length > 5) {
    for (let i = 0; i <= 4; i++) {
      const language = document.createElement('li');
      language.innerText = countryJsonData.language[i].language;
      languageElement.appendChild(language);
    }
  } else {
    countryLanguageArray.forEach((lang) => {
      const language = document.createElement('li');
      language.innerText = lang.language;
      languageElement.appendChild(language);
    });
  }
}

export default displayLanguages;
