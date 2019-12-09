// ENTRY Point for Webpack
// import '../assets/stylesheets/input.css.js'; // ENTRY for CSS
// import '../assets/stylesheets/entry_style';

// Other JS Files:
import baseMap from './base_map';
import aboutModal from './modals/about';
import storyModal from './modals/story';

document.addEventListener("DOMContentLoaded", () => {
  aboutModal();
  storyModal();
  baseMap();

})