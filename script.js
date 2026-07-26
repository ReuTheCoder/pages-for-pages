function revealContent() {
  const content = document.querySelector('.content');
  const poemSpans = document.querySelectorAll('.poem span');

  // Reveal main content
  content.style.opacity = '1';
  content.style.pointerEvents = 'auto';

  // Stop poem animation immediately
  poemSpans.forEach(span => {
    span.style.animation = 'none';
    span.style.opacity = '1';
  });
}

// Reveal after animation ends (8 seconds)
setTimeout(revealContent, 8000);

// Reveal early if any key is pressed
document.addEventListener('keydown', revealContent);

// Reveal early if screen is clicked
document.addEventListener('click', revealContent);
