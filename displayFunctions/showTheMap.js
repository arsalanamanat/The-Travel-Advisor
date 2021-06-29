import { mapContainer, mapElement } from '../constants.js';
import decreaseBackgroundOpacity from '../utilities/decreaseBackgroundOpacity.js';

function showTheMap(countryJsonData) {
  decreaseBackgroundOpacity();
  mapElement.innerText = '';
  mapContainer.classList.remove('hide');

  const mapLat = countryJsonData.maps.lat;
  const mapLong = countryJsonData.maps.long;
  const mapZoom = countryJsonData.maps.zoom;

  let platform = new H.service.Platform({
    apikey: '4e6F5-EDJ-mDdMKESOcqehu4gbsWljVL-GkGW95qpRo',
  });
  var maptypes = platform.createDefaultLayers();
  var map = new H.Map(mapElement, maptypes.vector.normal.map, {
    zoom: mapZoom,
    center: { lng: mapLong, lat: mapLat },
  });
}

export default showTheMap;
