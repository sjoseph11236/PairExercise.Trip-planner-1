const mapboxgl = require("mapbox-gl");
mapboxgl.accessToken = 'pk.eyJ1Ijoic2pvc2VwaDExMjM2IiwiYSI6ImNrMTZsOXptMDAxMXkzY3BhZm9kZWxmOTgifQ.34HJoREz_ili2il4iJL6bQ';
// import createMarker from "./marker";
const createMarker = require('./marker');


const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});



const hotel = createMarker('hotelMarker', [40.714242, -74.005546]);
hotel.addTo(map);
console.log(hotel)