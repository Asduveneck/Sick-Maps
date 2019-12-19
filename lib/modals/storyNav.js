// Individual Story
const slideMaker = (title, content) => ({title, content}); // TODO:  Maybe add a third kv for functions so each time we switch it invokes a new function...?

// Array to hold stories:
let slides = [
  // Placeholders to store things (will either be variables or filled in literally, depending)
  slideMaker("Title Slide 0", "Content Slide 0: tutorial?"),
  slideMaker(
    "Tutorial",
    "<li>1. Scroll up or down within this panel for additional information.</li><li>2. Click left or right to progress.</li><li>3. Click on About or View for additional information or to interact with the data.</li><br/> Click > to begin the story."
  ),
  slideMaker("Title Slide 2", "Content Slide 2"),
  slideMaker("Title Slide 3", "Content Slide 3"),
  slideMaker("Title Slide 4", "Content Slide 4"),
  slideMaker("Title Slide 5", "Content Slide 5"),
  slideMaker("Title Slide 6", "Content Slide 6"),
  slideMaker("Title Slide 7", "Content Slide 7"),
  slideMaker("Title Slide 8", "Content Slide 8"),
  slideMaker("Title Slide 9", "Content Slide 9"),
  slideMaker("Title Slide 10", "Content Slide 10")
];

/* Modal opening and closing done. All that's left is to set default behavior and switches here
*/

const storyNav = () => {
  // Constants from panel
  let storyTitle = document.getElementById('storyTitle');
  let storyContent = document.getElementById('storyContent');

  // Grabbing elements from storyNav
  let snLeft = document.getElementById('snLeft');
  let snRight = document.getElementById('snRight');
  let fakeLeft = document.getElementById('fakeLeft');
  let fakeRight = document.getElementById('fakeRight');
  let numLeft = document.getElementById('numLeft');
  let numRight = document.getElementById('numRight');
  
  let slideNum = 1;
  let numSlides = slides.length - 1;
  // Listeners
  snLeft.addEventListener('click', decNumLeft)
  snRight.addEventListener('click', incNumRight)

  // DEFAULT value for num (start from slide 1...)
  if(numLeft.innerHTML === "") {
    numLeft.innerHTML = slideNum
  }

  // Assigning values to stuff
  numRight.innerHTML = numSlides // slides.length - 1; // Offset by 1 for slide 0
  snLeft.style.display = "none";
  fakeLeft.style.display = "block"; // default
  updateStorySlide();

  function updateStorySlide() {
    numLeft.innerHTML = slideNum;
    storyTitle.innerHTML = slides[slideNum].title;
    storyContent.innerHTML = slides[slideNum].content;
  }


  function decNumLeft() {
    slideNum -= 1;
    updateStorySlide();
    if (slideNum === 1) {
      snLeft.style.display = 'none';
      fakeLeft.style.display = 'block';
    }
    snRight.style.display = 'block';
    fakeRight.style.display = 'none';
  }
  
  function incNumRight() {
    slideNum += 1;
    updateStorySlide();
    snLeft.style.display = 'block';
    fakeLeft.style.display = 'none';
    if (slideNum === numSlides) {
      snRight.style.display = 'none';
      fakeRight.style.display = 'block'; 
    }
  }

};

export default storyNav;