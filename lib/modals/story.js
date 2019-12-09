/* Similar open modal and close modal, but no x and no close modal elsewhere. 
Close modal will be attached to the other `buttons` in the nav bar.
*/

// Individual Story
const slideMaker = (title, content) => ({title, content});

// Array to hold stories:
let slides = [ // Placeholders to store things (will either be variables or filled in literally, depending)
  slideMaker("Title Slide 1", "Content Slide 1"),
  slideMaker("Title Slide 2", "Content Slide 2"),
  slideMaker("Title Slide 3", "Content Slide 3"),
  slideMaker("Title Slide 4", "Content Slide 4"),
  slideMaker("Title Slide 5", "Content Slide 5")
]

/* Modal itself won't need to block the entire screen functionality (yet...?) 
so it's okay to not have a larger modal screen that shuts down all interaction just yet.
But if I do, make sure I don't block the nav bar up top. 
*/

const storyModal = () => {
  // Modal and relevant components
  let aboutModal = document.getElementById('aboutModal');
  let modal = document.getElementById('storyModal');
  let modalBtn = document.getElementById('storyModBtn');
  let closeBtn = document.getElementById('viewBtn');
  let abtBtn = document.getElementById('aboutModBtn');
  let presentStory = true;
  console.log(presentStory);

  // Listeners
  modalBtn.addEventListener("click", openMod);
  closeBtn.addEventListener("click", closeMod);
  // abtBtn.addEventListener("click", closeMod);
  abtBtn.addEventListener("click", pauseMod);
  // window.addEventListener("click", clickOutside);


  // Toggle Story
  function togStory(){
    if (presentStory) {
      presentStory = false
    } else {
      presentStory = true;
    }
  }

  // Functions changing style
  function openMod(){
    presentStory = true;
    console.log("Clicked Story"); // IS BEING TRIGGERED.
    console.log(presentStory);
    modal.style.display = 'flex';
    modalBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.09)';
    closeBtn.style.backgroundColor = '';
  }

  function closeMod(){
    console.log("Clicked View");
    presentStory = false;
    console.log(presentStory);
    modal.style.display = 'none';
    modalBtn.style.backgroundColor = "rgba(255, 255, 255, 0.00)";
    closeBtn.style.backgroundColor = "rgba(255, 255, 255, 0.09)";
  }

  function pauseMod(){
    console.log("Clicked About")
    if (presentStory === true) {
      console.log("Present story true");
      // NOT WORKING.
    } else {
      console.log("Present Story false");
    }
  }

  // function clickOutside(e) {
  //   if (e.target === modal) {
  //     modal.style.display = "none";
  //     modalBtn.style.backgroundColor = "";
  //   }
  // }

};

export default storyModal;