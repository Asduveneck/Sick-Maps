// ENTRY Point for Webpack

// Other JS Files:
import baseMap from './base_map';
import allModals from './modals/all';

document.addEventListener("DOMContentLoaded", () => {
  allModals();
  baseMap();

})