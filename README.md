
# Pages for Pages
A cozy, library‑themed personal site and digital reading journal that showcases my reading endeavors through an interactive log, a custom visual bookshelf, and a simple workspace designed to elevate the book‑annotation experience.

<img src="assets/PFPLookthrough-ezgif.com-video-to-gif-converter.gif" alt="Website Lookthrough" width="100%"> 

Quick Start:

[![Badge Link to Website](https://img.shields.io/badge/Try%20Version%201.0%20Here-2E6F40?style=for-the-badge&logo=codepen&logoColor=black)](https://reuthecoder.github.io/pages-for-pages/) 

## Site Features
- **Interactive Reading Journal:** A touch-swipe and arrow-navigated book log that includes title search functionality and dynamic layout support for multiple journal entry sections.
- **Visual Bookshelf:** A digital bookcase frame that displays individual display and book spine slots that dynamically reveal full book artwork on hover.
- **Styled Content Cards:** Multiple pages feature content cards that display extra information such as a recommended book or what I am currently reading and how much progress I have made.
- **Integrated Focus Timer:** A geometric Pomodoro system featuring custom interval steppers and a circular SVG countdown tracking arc.
- **Ambient Soundscape Mixer:** A three-channel volume slider deck configured to play rain, fire, and conversational background tracks simultaneously.
- **Embedded Media Console:** A regex-powered link parser that automatically overlays streaming YouTube background loops inside a 16:9 viewport.
- **Drafting Scratchpad:** An auto-saving local textarea module that caches written text observations directly to the browser storage.

## How to Run Locally

This is a pure front-end static website built with native HTML5, CSS3, and Vanilla JavaScript on GitHub Codespaces. It has no system dependencies, requires no runtime installation commands (like npm or yarn), and uses browser `localStorage` instead of external environment variables.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ReuTheCoder/pages-for-pages.git
   ```
2. **Open the project folder:**
   ```bash
   cd pages-for-pages
   ```
3. **Launch the site:**

Double-click the `index.html` file in your file explorer to open it instantly in any modern web browser. **OR** Open the project folder in VS Code and click **Go Live** via the Live Server extension to run a local development server at `http://127.0.0.1:5500`.

## How It Works

Instead of relying on heavy frameworks, this application is engineered entirely with native web APIs, optimizing load performance by utilizing a zero-dependency architecture. The core reading log engine uses a custom JavaScript state controller linked to asynchronous CSS cubic-bezier transition classes to control page-swiping mechanics. When a user searches a title or swipes to navigate, the engine figures out the direction, applies hardware‑accelerated `translateX` transforms to keep the animation off the main thread, swaps the underlying data in a single layout tick, and then injects the updated template. The layout uses passive touch listeners (`touchstart` and `touchend`) to track horizontal swipe movement on touch devices, letting the interface trigger swipe actions quickly without slowing down rendering. 

The platform relies strictly on client-side state lifecycles to simulate traditional server features securely and dynamically. To bypass the performance costs of importing media rendering libraries, a custom Regular Expression parsing engine automatically isolates unique 11-character video identifiers out of variable raw user URL strings, translating them into sandboxed, loop-enabled iframe endpoints. Layout consistency is maintained on mobile viewports using standard CSS Flexbox wrapping attributes paired with horizontal track scrolling properties (`overflow-x: auto`), forcing menu items to fluidly glide sideways rather than fragmenting column stacks. Application persistence is achieved by hooking browser entry events and system atmosphere selectors directly into the Web Storage API (`localStorage`), allowing the application to cache written scratchpad text and restore the “dark-theme” layout state instantly across browser sessions without needing an external database layer.

## Acknowledgements
This project was made as a submission to [HackClub's Stardance Challenge](https://stardance.hackclub.com/) and was inspired when brainstorming ideas for their Personal Site mission. Thank you to Hackclub for motivating me to make this project!

Many of *Library Lounge*’s features were inspired by [I Miss My Cafe](https://imissmycafe.com). The media player was inspired by [LifeAt](https://lifeat.io). 

Codynn’s [Build a Pomodoro App](https://www.youtube.com/watch?v=LyT055nXXyc) project tutorial provided much help when making the Pomodoro Timer function for the *Library Lounge*.

favicon.io was used for making the favicon. The image was sourced from *All Day April* through Canva and slightly edited to better match the site's color palette. ezgif.com was used for the attached gif. Any audio was taken from Pixabay and was confirmed to not require attribution for non-commercial products.

### AI Use

I tried my best to avoid AI whenever possible. When debugging, I attempted to solve an issue first before consulting AI. Instead of asking AI to build entire sections of my project, I only used it to clarify specific syntax questions and then worked through the implementation on my own. 

Google’s Gemini was both purposely and inadvertently used during the creation of this project. It provided some assistance when researching how to implement a feature, solidifying the website color palette and drafting the initial structure of my CSS and Javascript to help achieve my desired look. It was intentionally used to aid in the creation of the embedded media console, the JS for the volume sliders and confirming I properly implemented `localStorage` to the annotation scratchpad.

OpenAI’s ChatGPT was used for debugging. 
