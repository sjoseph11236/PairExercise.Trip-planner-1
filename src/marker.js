const mapboxgl = require("mapbox-gl");
mapboxgl.accessToken = 'pk.eyJ1Ijoic2pvc2VwaDExMjM2IiwiYSI6ImNrMTZsOXptMDAxMXkzY3BhZm9kZWxmOTgifQ.34HJoREz_ili2il4iJL6bQ';


// why did we have to store the URL in a var to have it show up on the map?
const markers = {
  defaultMarker: "http://i.imgur.com/WbMOfMl.png",
  activityMarker: "http://i.imgur.com/WbMOfMl.png",
  hotelMarker: "http://i.imgur.com/D9574Cu.png",
  restMarker: "http://i.imgur.com/cqR6pUI.png"
}


const createMarker = function (markerType, coordinates) {
  let markerDomElm = document.createElement('div');
  markerDomElm.style.width = '32px';
  markerDomElm.style.height = '39px';
  markerDomElm.style.backgroundImage = `url(${markers[markerType]})`;
  return new mapboxgl.Marker(markerDomElm).setLngLat(coordinates);

}

module.exports = createMarker;
