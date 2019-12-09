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