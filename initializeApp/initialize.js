import fetchApi from '../fetchApi.js';
import updateDomElements from '../UpdateDomElements.js';

async function fetchData() {
  try {
    const responseData = await fetchApi(
      'https://travelbriefing.org/countries.json',
    );
    const jsonData = await responseData.json();

    updateDomElements(jsonData);
  } catch (error) {
    const errElement = document.createElement('div');
    errElement.classList.add('err-division');
    errElement.innerText = '';
    errElement.innerText = `Error : Sorry for the Inconvinience your program ${error.message} please refresh the Page`;
    document.body.appendChild(errElement);
  }
}

window.addEventListener('load', fetchData);
