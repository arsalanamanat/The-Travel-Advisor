import fetchCountryData from './fetchCountryData.js';

async function updateDomElements(jsonData) {
  const selectOptions = document.getElementById('selectOptions');
  const clickButton = document.getElementById('clickButton');
  const dynamicContainer = document.querySelector('.dynamic-container');

  // Select Button Event Listener
  jsonData.forEach((country) => {
    const countryNameOption = document.createElement('option');
    countryNameOption.value = country.name.split(' ').join('_');
    countryNameOption.innerHTML = country.name;
    selectOptions.appendChild(countryNameOption);
  });

  selectOptions.addEventListener('change', (e) => {
    clickButton.addEventListener('click', () => {
      fetchCountryData(e.target.value);

      dynamicContainer.classList.remove('hide');
    });
  });
}

export default updateDomElements;
