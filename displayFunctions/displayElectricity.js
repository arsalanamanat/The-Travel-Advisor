import { electricityElement } from '../constants.js';

function displayElectricity(countryJsonData) {
  const voltage = countryJsonData.electricity.voltage;
  const frequency = countryJsonData.electricity.frequency;
  electricityElement.innerText = `Voltage : (${voltage})  || Frequency (${frequency})`;
}

export default displayElectricity;
