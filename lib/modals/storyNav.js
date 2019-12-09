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

/* Modal opening and closing done. All that's left is to set default behavior and switches here
*/

const storyNav = () => {
  // Grabbing elements from storyNav
  let snLeft = document.getElementById('snLeft');
  let snRight = document.getElementById('snRight');
  let numLeft = document.getElementById('numLeft');
  let numRight = document.getElementById('numRight');

  // Listeners
  snLeft.addEventListener('click', incNumLeft)
  snRight.addEventListener('click', decNumRight)

  function incNumLeft() {
    console.log("clicked left button");
  }
  
  function decNumRight() {
    console.log("clicked on right button");
  }

};

export default storyNav;