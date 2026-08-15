function revealContent() {
  const content = document.querySelector('.content');
  const poem = document.querySelector('.hero');

  if (poem) {
    poem.classList.add('hidden');
  }

  if (content) {
    content.classList.add('visible');
  }

  document.removeEventListener('keydown', revealContent);
  document.removeEventListener('click', revealContent);  
}

setTimeout(revealContent, 9500);

// Reveal early if any key is pressed
document.addEventListener('keydown', revealContent);

// Reveal early if screen is clicked
document.addEventListener('click', revealContent);
// ---------------------------------------------------------------------
const journalEntries = [
  {
    title: "A Bird in the House",
    author: "Margaret Laurence",
    coverUrl: "assets/books/ABITH.jpg",
    rating: "★★★★☆",
    genre: "Semi-Autobiographical Fiction",
    format: "Paperback",
    dateFinished: "2025/09/16",
    thoughtsHeading: "Current Thoughts",
    thoughts: "(To be added)"
  },
  {
    title: "The Ballad of Songbirds and Snakes",
    author: "Suzanne Collins",
    coverUrl: "assets/books/The_Ballad_of_Songbirds_and_Snakes_(Suzanne_Collins).png",
    rating: "★★★★★",
    genre: "Dystopian Young Adult Fiction",
    format: "Audiobook & Hardcover",
    dateFinished: "2025/09/16", //I actually have to checkk...placeholder
    thoughtsHeading: "Current Thoughts",
    thoughts: "(To be added)",
    thoughtsHeading2: "Favorite Quotes",
    thoughts2: "(To be added)"
  },
  {
    title: "The Three Body Problem",
    author: " Liu Cixin",
    coverUrl: "assets/books/3BodyProblem.jpg",
    rating: "★★★★☆",
    genre: "Science Fiction",
    format: "Paperback",
    dateFinished: "2025/09/16",
    thoughtsHeading: "Current Thoughts",
    thoughts: "(To be added)"
  }
];

let currentIndex = 0;
let isAnimating = false;
let touchStartX = 0;
let touchEndX = 0;

const searchError = document.getElementById("search-error");
const searchInput = document.getElementById("journal-search");
const cardContainer = document.getElementById("journal-card-container");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

function createCardHTML(book) {
  return `
    <div class="journal-card">
      <div class="journal-card-wrapper">
        <img src="${book.coverUrl}" alt="Book cover of '${book.title}'" onerror="this.src='https://placehold.co/160x280/2E6F40/white?text=Book+Cover\nPlaceholder&font=lora'">
      </div>
      <div class ="journal-details">
        <h2>${book.title}</h2>
        <p class="journal-author">by ${book.author}</p>

        <div class="journal-meta-row">
          <span class="journal-badge">${book.genre}</span>
          <span class="journal-badge">${book.format}</span>
          <div class="journal-stars">${book.rating}</div>
        </div>

        <div class="journal-thoughts-box">
          <h4>${book.thoughtsHeading}</h4>
          <p>${book.thoughts}</p>
        </div>

        ${book.thoughtsHeading2 && book.thoughts2 ? `
        <div class="journal-thoughts-box" style="margin-top: 15px;">
          <h4>${book.thoughtsHeading2}</h4>
          <p>${book.thoughts2}</p>
        </div>
        ` : ''}

        ${book.thoughtsHeading3 && book.thoughts3 ? `
        <div class="journal-thoughts-box" style="margin-top: 15px;">
          <h4>${book.thoughtsHeading3}</h4>
          <p>${book.thoughts3}</p>
        </div>
        ` : ''}

      </div>
    </div>
  `;
}

function initJournal() {
  if(journalEntries.length > 0) {
    cardContainer.innerHTML = createCardHTML(journalEntries[currentIndex]);
  }
}

function transitionCard(newIndex, direction) {
  if (isAnimating) return;
  isAnimating = true;
  searchError.style.display = "none";
  const currentCard = cardContainer.querySelector(".journal-card");

  if(direction === "right") {
    currentCard.classList.add("slide-out-left");
  } else {
    currentCard.classList.add("slide-out-right");
  }

  setTimeout(() => {
    currentIndex = newIndex;
    cardContainer.innerHTML = createCardHTML(journalEntries[currentIndex]);

    const nextCard = cardContainer.querySelector(".journal-card");
    if (direction === "right") {
      nextCard.classList.add("slide-in-right");
    } else {
      nextCard.classList.add("slide-in-left");
    }

    setTimeout(() => {
      isAnimating = false;
    }, 400);
  }, 400);
}

prevBtn.addEventListener("click", () => {
  let targetIndex = currentIndex - 1;
  if (targetIndex < 0) targetIndex = journalEntries.length - 1;
  transitionCard(targetIndex, "left");
});

nextBtn.addEventListener("click", () => {
  let targetIndex = currentIndex + 1;
  if (targetIndex >= journalEntries.length) targetIndex = 0;
  transitionCard(targetIndex, "right");
});

cardContainer.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
}, {passive: true });

cardContainer.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipeGesture();
}, {passive: true });

function handleSwipeGesture() {
  const swipeThreshold = 50;

  if(touchStartX - touchEndX > swipeThreshold) {
    let targetIndex = currentIndex + 1;
    if (targetIndex >= journalEntries.length) targetIndex = 0;
    transitionCard(targetIndex, "right");
  }

  if(touchEndX - touchStartX > swipeThreshold) {
    let targetIndex = currentIndex - 1;
    if (targetIndex < 0) targetIndex = journalEntries.length - 1;
    transitionCard(targetIndex, "left");
  }
}

searchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase().trim();
  if (query === "") return;

  const foundIndex = journalEntries.findIndex(book => book.title.toLowerCase().includes(query));
  if (foundIndex !== -1) {
    searchError.style.display = "none";
    if (foundIndex !== currentIndex) {
      const direction = foundIndex > currentIndex ? "right" : "left";
      transitionCard(foundIndex, direction);
    }
  } else {
    searchError.style.display = "block";
  }
});

document.addEventListener("DOMContentLoaded", initJournal);