import { timeZoneElement } from '../constants.js';

function displayTimeZone(countryJsonData) {
  const countryTimeZone = countryJsonData.timezone.name;
  const currentTime = new Date().toLocaleString('en-US', {
    timeZone: countryTimeZone,
    timeStyle: 'medium',
  });

  timeZoneElement.innerText = `${currentTime} (${countryTimeZone})`;
}

export default displayTimeZone;
