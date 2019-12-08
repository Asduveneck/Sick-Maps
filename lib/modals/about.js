
const aboutModal = () => {
  // Modal and relevant components
  let modal = document.getElementById('aboutModal');
  let modalBtn = document.getElementById('aboutModBtn');
  let closeBtn = document.getElementsByClassName('closeBtn')[0]; // Refactor into ID?
  //Listeners
  modalBtn.addEventListener('click', openMod);
  closeBtn.addEventListener('click', closeMod);
  window.addEventListener('click', clickOutside);

  // Functions change styling
  function openMod(){
    modal.style.display = 'block';
    modalBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.09)';
  }

  function closeMod(){
    modal.style.display = 'none';
    modalBtn.style.backgroundColor = '';
  }

  function clickOutside(e){
    if(e.target === modal){
      modal.style.display = 'none';
      modalBtn.style.backgroundColor = "";
    }
  }


}

export default aboutModal;