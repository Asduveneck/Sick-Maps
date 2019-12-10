// Individual Story
const slideMaker = (title, content) => ({title, content}); // TODO:  Maybe add a third kv for functions so each time we switch it invokes a new function...?

// Array to hold stories:
let slides = [ // Placeholders to store things (will either be variables or filled in literally, depending)
  slideMaker("Title Slide 0", "Content Slide 0: tutorial?"),
  slideMaker("Title Slide 1", "Content Slide 1"),
  slideMaker("Title Slide 2", "Content Slide 2"),
  slideMaker("Title Slide 3", "Content Slide 3"),
  slideMaker("Title Slide 4", "Content Slide 4"),
  slideMaker("Title Slide 5", "Content Slide 5")
]

/* Modal opening and closing done. All that's left is to set default behavior and switches here
*/

const storyNav = () => {
  // Constants from panel
  let storyTitle = document.getElementById('storyTitle');
  let storyContent = document.getElementById('storyContent');

  // Grabbing elements from storyNav
  let snLeft = document.getElementById('snLeft');
  let snRight = document.getElementById('snRight');
  let numLeft = document.getElementById('numLeft');
  let numRight = document.getElementById('numRight');
  
  let slideNum = 1;

  // Listeners
  snLeft.addEventListener('click', incNumLeft)
  snRight.addEventListener('click', decNumRight)

  // DEFAULT value for num (start from slide 1...)
  if(numLeft.innerHTML === "") {
    console.log("assign it here")
    numLeft.innerHTML = slideNum
  }

  // Assigning values to stuff
  numRight.innerHTML = slides.length;

  storyTitle.innerHTML = slides[slideNum].title;
  storyContent.innerHTML = slides[slideNum].content;


  function incNumLeft() {
    console.log("clicked left button");
    console.log(numLeft.innerHTML);
  }
  
  function decNumRight() {
    console.log("clicked on right button");
  }



};

export default storyNav;