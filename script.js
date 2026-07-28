function revealContent() {
  const content = document.querySelector('.content');
  const poem = document.querySelector('.poem');

  if (poem) {
    poem.classList.add('hidden');
  }

  if (content) {
    content.classList.add('visible');
  }

  document.removeEventListener('keydown', revealContent);
  document.removeEventListener('click', revealContent);  
}


// Reveal after animation ends (8 seconds)
setTimeout(revealContent, 9500);

// Reveal early if any key is pressed
document.addEventListener('keydown', revealContent);

// Reveal early if screen is clicked
document.addEventListener('click', revealContent);
