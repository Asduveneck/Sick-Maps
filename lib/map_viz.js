// ENTRY Point for Webpack

// Other JS Files:
import baseMap from './base_map';
import allModals from './modals/all';
import storyNav from './modals/storyNav';

document.addEventListener("DOMContentLoaded", () => {
  allModals();
  storyNav();
  baseMap();

})