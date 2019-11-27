// ENTRY Point for Webpack

import '../assets/stylesheets/input.css.js'; // ENTRY for CSS
import { mapBoxKey } from "../config/keys";
// Other JS files
// import './map_itself.js';

// Move somewhere else?

// //



console.log("in map_viz.js");

document.addEventListener('DOMContentLoaded', () => {

// document.getElementById('TEST2').innerHTML = "NEW STUFF" // Not needed

let mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
mapboxgl.accessToken = mapBoxKey;
let map = new mapboxgl.Map({
  container: "mapId",
  style: "mapbox://styles/aduv/ck3gs0f7w01pb1cqxv77pb4j8"
});


})
