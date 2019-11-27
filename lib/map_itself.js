let mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
import { mapBoxKey } from "../config/keys"; // Need to specify permissions later. FINDME temp

mapboxgl.accessToken = mapBoxKey;
let map = new mapboxgl.Map({
  container: "mapId",
  style: "mapbox://styles/mapbox/streets-v11"
});

