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
    thoughtsHeading: "Theme Analysis",
    thoughts: `Margaret Laurence’s A Bird in the House is a collection of short stories each told by the same character, Vanessa MacLeod,  as she grows up in the fictional prairie town of Manawaka, Manitoba throughout the start of the mid 20th century. One subtle theme I noticed throughout these stories is escapism. It appears in small habits and private thoughts, growing out of the characters’ desire to mentally or physically step away from their lives. Manawaka, and especially the Connor house, often feels like a cage. The Great Depression makes leaving impossible, so people turn to personal acts of defiance to cope. The brick house is rigid and demanding, and finding any form of escape becomes a way to survive.

In “The Sound of Singing”, Vanessa asks her grandmother whether the caged bird wants to leave, which mirrors how the characters feel about their own lives. Aunt Edna escapes through small guilty pleasures like smoking or eating fudge. Her unemployment bothers her deeply, and she keeps bringing it up, showing how badly she wants out. Grandfather Connor’s pioneer spirit controls her life and even drives away her boyfriends, making her desire for escape stronger.

In “To Set Our House in Order”, Grandmother MacLeod escapes by pretending things are fine. Ordering from the Robinson and Cleaver catalogue lets her imagine a life untouched by the Depression. She clings to traditional values and expects Ewen to hire help even when it is unrealistic. The older characters hold tightly to old social norms as if keeping them intact will protect their households from the world outside.

Vanessa’s own escape comes through writing. One of her first stories is about a girl named Marie in early Quebec, but she stops when she realizes the story mirrors her life too closely. She cannot find a believable way for Marie to escape her unpromising life, and she concludes there is no point in continuing. Just like Marie, Vanessa feels she will never leave the Brick House. Throughout the book she uses storytelling to escape boredom and occupy her mind. In “The Loons”, she projects a “noble savage” fantasy onto Piquette to make her summer feel more adventurous, even though she feels no real connection to the wilderness. Her imagination becomes both a shield and a kind of blindness.

Chris, in “Horses of the Night”, is one of the clearest examples of escapism. He disrupts the usual dynamics of the Brick House and reveals things about the Connor family, but he also carries his own desire to escape. Coming from an impoverished family in Shallow Creek, he is optimistic at first and dreams of becoming a civil engineer. When he realizes that dream cannot come true, he finds work and tries to save money, but the Depression makes progress impossible. His escape becomes his imagination. He keeps an optimistic view of the world, and when he is sent to war and sees the worst of humanity, the contrast destroys him. His breakdown shows how fragile his escape really was. Unlike the Connor daughters, Chris did not have a family to fall back on. His dreams were his only refuge, and when they collapsed, he had nowhere else to go.`
  },
  {
    title: "The Ballad of Songbirds and Snakes",
    author: "Suzanne Collins",
    coverUrl: "assets/books/The_Ballad_of_Songbirds_and_Snakes_(Suzanne_Collins).png",
    rating: "★★★★★",
    genre: "Dystopia YA Fiction",
    format: "Audiobook & Hardcover",
    dateFinished: "2025/06/07", 
    thoughtsHeading: "Current Thoughts",
    thoughts: `Before reading this, my favourite Hunger Games book was Catching Fire, but this one might be a close contender. I happened to be studying Enlightenment philosophy at the same time for my social studies class (where we talked about key Enlightenment thinkers like Hobbes, Locke, Rousseau) so seeing a Hobbes quote open the novel immediately pulled me in. The story keeps circling around questions those philosophers asked: What is human nature? What do people become when survival is the only rule? What should a “social contract” look like when society is built on fear? I think that overlap helped me to appreciate the book even more than unusual.

The worldbuilding is excellent, especially in how it traces Snow’s origins. At first, he lives in conditions not far from what Katniss faced, such as rationing food and to some extent, hiding poverty behind manners and pride. It made me wonder how someone who knew hardship so intimately could grow into a leader who ignores suffering in others. Watching him shift from empathy to ambition is unsettling, but also fascinating. I noticed Collins doesn’t rush his transformation; rather she lets us see him make small compromises or questionable remarks regarding power, each moment where survival becomes more important than morality.

One of my favourite parts was seeing how primitive the early Hunger Games were. The arena was barely an arena, the rules were inconsistent, and the Capitol itself didn’t fully understand what the Games were supposed to be. Experiencing this through Snow’s eyes made me further appreciate why Collins chose to let 63 years pass until Katniss volunteered as tribute. Outside the Games, we also get glimpses of what Panem used to be like: a Capitol still recovering from war, districts still learning their place, and a society trying to rebuild itself through control. The world feels raw and unfinished, which makes it even more compelling.

Lucy Gray’s presence adds another layer. She’s unpredictable, artistic, and impossible for Snow to fully understand. The contrast between her free‑spirited nature and Snow’s growing desire for order makes the story feel like a slow unraveling. You can see the future tyrant forming, piece by piece. 

The ending is incredibly engaging, though a little rushed. Still, the ambiguity works in its favour. The uncertainty mirrors the themes of the book: how truth becomes slippery when power is involved, and how history is shaped by whoever survives to tell it. Overall, this book deepened my understanding of Panem and made the original trilogy feel even richer. It’s strange, haunting, and surprisingly philosophical. `,
    thoughtsHeading2: "Favorite Quotes",
    thoughts2: `“The show’s not over until the mockingjay sings,” she said.
“The mockingjay?” He laughed. “Really, I think you’re just making these things up.”
“Not that one. A mockingjay’s a bona fide bird,” she assured him.
“And it sings in your show?” he asked.
“Not my show, sweetheart. Yours. The Capitol’s anyway.” 

"Hereby it is manifest, that during the time men live without a common Power to keep them all in awe, they are in the condition which is called Warre; and such a warre, as is of every man, against every man."
-Thomas Hobbes, Leviathan, 1651

"The state of nature has a law of nature to govern it, which obliges every one; and reason, which is that law, teaches all mankind, who will but consult it, that being equal and independent, no one ought to harm another in his life, health, liberty, of possessions..."
-John Locke, Second Treatise of Government, 1689`
  },
  {
    title: "The Three Body Problem",
    author: " Liu Cixin",
    coverUrl: "assets/books/3BodyProblem.jpg",
    rating: "★★★★☆",
    genre: "Science Fiction",
    format: "Paperback",
    dateFinished: "2025/01/06",
    thoughtsHeading: "Current Thoughts",
    thoughts: `I picked up this book because a friend recommended it, and I ended up loving it. It feels like my real introduction to science fiction. Before this, my idea of sci‑fi leaned more toward science‑fantasy, which I enjoyed but never considered a favourite genre. This book changed that. Even though some parts get technical, the story is still easy to follow, and I liked how Cixin Liu uses his characters to explore something much bigger than themselves. The focus is not on their personal lives as much as it is on the fate of the world and how humanity responds to the possibility of an alien invasion.

At the same time, I sometimes wished we got more depth from the characters. Many of them feel like tools for the plot, almost like they exist to move the story forward rather than to be fully developed people. I was a little disappointed when I learned that Wang Miao wouldn’t return in the second book, since I wanted more time with him, but I’m still excited to see how the Trisolaris storyline continues.

The part of the book that engaged me the most was Ye Wenjie’s rise at Red Coast Base and her eventual betrayal of humanity. Her storyline is crafted so well. I’ve always liked coming‑of‑age arcs that avoid clichés and add something unexpected, and hers does exactly that. I also loved how Cixin parallels Wang Miao’s experiences in the Three Body game with the actual history of the aliens. It’s a clever way to introduce the Trisolarans without dumping lore on the reader later. This book made me look deeper into space theories and the possibilities of intelligent life beyond Earth. It opened up a whole new interest for me. Overall, a great read.`
  },
  {
    title: "The Perks of Being a Wallflower",
    author: "Stephen Chbosky",
    coverUrl: "assets/books/TPOBAW.jpg",
    rating: "★★★★☆",
    genre: "Coming-Of-Age YA",
    format: "Audiobook",
    dateFinished: "2025/09/10",
    thoughtsHeading: "Thoughts",
    thoughts: `The story felt emotional in a way that lingered. Unlike many other books, this book made me want to actively seek out analysis on its characters and themes because it instilled in me a desire to fully understand this story. (This may have also been because I watched the movie shortly after reading this and was intrigued by some of the subtle deviations from the book’s story and character personalities).

It made me rethink where old “high school drama” movies get their ideas. Those films often flatten people into tropes, but this book lets its characters breathe. For instance, when Charlie, the protagonist, steps in to stop the fight between his friend, Patrick and Brad “the bully”, a nuance is created when Brad later thanks Charlie. From Brad’s actions, it becomes clear that people don’t fit neatly into the labels we give them. The moment quietly echoes the theme of identity as it reveals how complicated people really are beneath the surface.

I think this book did a really good job at opening a clear window into suburban American teen life in the early 1990s (which likely was because Chbosky was inspired by his own experiences at the time). I find it funny that even though I liked the characters, I don’t think I would have fit into their world. The book paints a picture that it was NORMAL most teens to have dated, partied hard and experimented with *many* things they shouldn’t. I used to think that kind of behaviour of acting older than you really only existed in stories about rebellious youth, but the genuine writing made it feel strangely real.

Aside from that, the emotional depth of the book surprised me. It effectively shows how friendships and past experiences such as losing someone or watching a friend struggle can shape the way a person moves through the world. Charlie begins as a quiet “people pleaser,” always trying to keep the peace, but slowly learns to trust himself. His relationships become a kind of map, guiding him toward belonging and helping him understand his own identity.

I think the thing that really made the story stick through was the tone shift the book had towards the end. Memories Charlie had pushed away begin to surface, and some earlier scenes (like the moment he witnesses something “unsettling” at his older brother’s party) suddenly make more sense. When memories of Aunt Helen return, they bring confusion, vivid dreams, and moments where he disturbingly drifts out of awareness. By showing how the past can stay hidden until something brings it back, and how overwhelming it can be to finally face what you didn’t understand before, the book actually depicts PTSD in the modern age. I watched a few interesting video essays on this theme specifically. If you have the time, I would recommend watching a few to get a deeper appreciation for Chbosky's writing.`
  },
  {
    title: "The Giver",
    author: "Lois Lowry",
    coverUrl: "assets/books/Giver.jpg",
    rating: "★★★★☆",
    genre: "Dystopian Fiction",
    format: "Audiobook",
    dateFinished: "2025/10/06",
    thoughtsHeading: "Thoughts & Review",
    thoughts: `**This log contains spoilers!**

This story offers such a really intriguing take on a “utopian” (really a dystopian) world. Lowry creates a world built on sameness where many human problems and pleasures have been quietly erased. The community moves with a kind of collective rhythm, making this society feel like it is based on some version of “gentle communism.” It’s eerie and fascinating at the same time.

From the beginning, I suspected that “release” was a softened way of describing death, so the revelation that it meant euthanasia did not shock me. Still, it was unsettling to see how casually the practice was accepted, even celebrated, for both the very old and the very young. For me, the twist about color was far more surprising. Learning that no one could see it felt strange at first, but the more I thought about it, the more it fit perfectly into a world built on sameness. As the story unfolded, I loved discovering each detail that made this society so different. Watching Jonas encounter things like snow, sunlight, and love for the first time (and grow to cherish them) was one of the most beautiful parts of the book.

I’m rating this 4.5 stars. The story was incredibly engaging, and I only held back half a star because I felt as though the ending was a little rushed. However, its ambiguity is also what makes it linger. The final scene leaves you wondering whether Jonas and Gabriel truly found civilization or whether they died in the snowstorm and imagined it in their last moments. A haunting possibility is that, if they did die, and Jonas heard music in that hallucination, it would mean the Giver had passed on as well, since he was the only one who carried the memory of music. 

Apparently this book is part of a series, so I’m hoping I’ll learn the “real” ending when I continue reading. (Most thoughts I have read online seem to suggest the canon ending is the hopeful one, but I kind of like sitting with the uncertainty for now.)`
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