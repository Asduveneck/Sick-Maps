const allModals = () => {
  // Modals: abt: About ; stry: Story
  let abtModal = document.getElementById('aboutModal');
  let abtModalBtn = document.getElementById('aboutModBtn');
  let abtCloseBtn = document.getElementsByClassName('closeBtn')[0]; // Refactor into ID?

  let stryModal = document.getElementById("storyModal");
  let stryModalBtn = document.getElementById("storyModBtn");
  let viewBtn = document.getElementById("viewBtn");
  let presentStory = true;
// 
  // colors
  let wt_16 = "rgba(255, 255, 255, 0.16)";
  let transparent = "rgba(255, 255, 255, 0.00)";

  // Listeners
  abtModalBtn.addEventListener('click', abtOpenMod);
  abtCloseBtn.addEventListener('click', abtCloseMod);
  window.addEventListener('click', clickOutside);
  stryModalBtn.addEventListener("click", stryOpenMod);
  viewBtn.addEventListener("click", stryCloseMod);

  // Functions change styling

  if (presentStory = true) {
    stryModalBtn.style.backgroundColor = wt_16;
  }

  function abtOpenMod(){
    abtModal.style.display = 'block';
    abtModalBtn.style.backgroundColor = wt_16;
    stryModal.style.display = "none";
  }

  function stryOpenMod() {
    presentStory = true;
    stryModal.style.display = "flex";
    stryModalBtn.style.backgroundColor = wt_16;
    viewBtn.style.backgroundColor = "";
  }

  function stryCloseMod() {
    presentStory = false;
    stryModal.style.display = "none";
    stryModalBtn.style.backgroundColor = "";
    viewBtn.style.backgroundColor = wt_16;
  }

  function abtCloseMod(){
    abtModal.style.display = 'none';
    abtModalBtn.style.backgroundColor = '';
    if (presentStory === true) {
      stryModal.style.display = "flex";
    }
  }

  function clickOutside(e){
    if(e.target === abtModal){
      abtModal.style.display = 'none';
      abtModalBtn.style.backgroundColor = "";
      if (presentStory === true) {
        stryModal.style.display = "flex";
      }
    }
  }
}

export default allModals;