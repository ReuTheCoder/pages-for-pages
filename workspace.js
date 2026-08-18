
// ----Pomodoro-----------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  if (!document.querySelector(".workspace-grid-main")) return;


  let timerInterval = null;
  let isRunning = false;
  let currentMode = "read"; 0

  const durations = {
    read: parseInt(document.getElementById("val-read").textContent) * 60,
    break: parseInt(document.getElementById("val-break").textContent) * 60,
    long: parseInt(document.getElementById("val-long").textContent) * 60
  };

  let timeLeft = durations[currentMode];
  let totalSessionTime = durations[currentMode];

  const timerDisplay = document.getElementById("timer-display");
  const sessionLabel = document.getElementById("timer-session-label");
  const startBtn = document.getElementById("timer-start");
  const pauseBtn = document.getElementById("timer-pause");
  const resetBtn = document.getElementById("timer-reset");
  const circleFill = document.querySelector(".timer-circle-fill");

  const circumference = 2*Math.PI*45;
  if (circleFill) {
    circleFill.style.strokeDasharray = circumference;
    circleFill.style.strokeDashoffset = 0;
  }

  function updateTimerUI() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;

    if(circleFill && totalSessionTime > 0) {
      const percentageLeft = timeLeft / totalSessionTime;
      const offsetValue = circumference - (percentageLeft * circumference);
      circleFill.style.strokeDashoffset = offsetValue;
    }
  }

  function switchMode(newMode) {
    clearInterval(timerInterval);
    isRunning = false;
    currentMode = newMode;
    timeLeft = durations[currentMode];
    totalSessionTime = durations[currentMode];

    if(currentMode === "read") sessionLabel.textContent = "Reading Session";
    if(currentMode === "break") sessionLabel.textContent = "Short Break";
    if(currentMode === "long") sessionLabel.textContent = "Long Break";

    startBtn.classList.remove("btn-active");
    pauseBtn.classList.remove("btn-active");

    updateTimerUI();
  }

startBtn.addEventListener("click", () => {
  if (isRunning) return;
  isRunning = true;
  startBtn.classList.add("btn-active");
  pauseBtn.classList.remove("btn-active");

  timerInterval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateTimerUI();
    } else {
      clearInterval(timerInterval);
      if (currentMode === "read") {
        switchMode("break");
      } else {
        switchMode("read");
      }
      alert("Session completed! Start your next interval");
    }
  }, 1000);
});

pauseBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  isRunning = false;
  startBtn.classList.remove("btn-active");
  pauseBtn.classList.add("btn-active");
});

resetBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  isRunning = false;
  startBtn.classList.remove("btn-active");
  pauseBtn.classList.remove("btn-active");
  timeLeft = durations[currentMode];
  updateTimerUI();
});

document.querySelectorAll(".step-btn").forEach(button => {
  button.addEventListener("click", () => {
    const action = button.getAttribute("data-action");
    const target = button.getAttribute("data-target");
    const displayVal = document.getElementById(`val-${target}`);

    let currentMinutes = parseInt(displayVal.textContent);

    if(action === "inc" && currentMinutes < 60) {
      currentMinutes += 1;
    } else if (action === "dec" && currentMinutes > 1) {
      currentMinutes -= 1;
    }
    displayVal.textContent = currentMinutes;

    durations[target] = currentMinutes * 60;

    if (target === currentMode && !isRunning) {
      timeLeft = durations[currentMode];
      totalSessionTime=durations[currentMode];
      updateTimerUI();
    }
  });
});

//SOUNDSCAPE MIXER
const soundTracks = [
  { slider: "track-rain", audio: "audio-rain" },
  { slider: "track-fire", audio: "audio-fire" },
  { slider: "track-library", audio: "audio-library" }
];

soundTracks.forEach(track => {
  const sliderElement = document.getElementById(track.slider);
  const audioElement = document.getElementById(track.audio);

  if (sliderElement && audioElement) {
    sliderElement.addEventListener("input", (e) => {
      const volumeLevel = e.target.value / 100;
      audioElement.volume = volumeLevel;

      if (volumeLevel > 0 && audioElement.paused) {
        audioElement.play().catch(err => console.log("Audio play gesture catch:", err));
      } else if (volumeLevel === 0 && !audioElement.paused) {
        audioElement.pause();
      }
    });
  }
});
//YOUTUBE
const mediaInput = document.getElementById("media-url-input");
const loadMediaBtn = document.getElementById("load-media-btn");
const fallbackBox = document.getElementById("video-placeholder");
const iframePlayer = document.getElementById("global-iframe-player");

function parseYoutubeID(url) {
  // A comprehensive regular expression that extracts the 11-character video ID from any valid YouTube URL format
  const regExp = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/|shorts\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
  const match = url.match(regExp);
  
  // YouTube video IDs are strictly 11 characters long. This checks and extracts index 1.
  return (match && match[1].length === 11) ? match[1] : null;
}

if (loadMediaBtn && mediaInput) {
  loadMediaBtn.addEventListener("click", () => {
    const urlString = mediaInput.value.trim();
    if (urlString === "") return;

    const videoID = parseYoutubeID(urlString);

    if (videoID && iframePlayer && fallbackBox) {
      // Added the critical /embed/ path link segment so YouTube doesn't block the site layout context
      iframePlayer.src = `https://www.youtube.com/embed/${videoID}?autoplay=1&mute=1&loop=1&playlist=${videoID}`;
      // Change UI state visibility
      fallbackBox.style.display = "none";
      iframePlayer.style.display = "block";
    } else {
      alert("Invalid format. Please paste a standard YouTube sharing link.");
    }
  });
}

//function parseYoutubeID(url) {
  //const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  //const match = url.match(regExp);
  //return (match && match[2].length === 11) ? match[2]:null;
//}


/* loadMediaBtn.addEventListener("click", () => {
  const urlString = mediaInput.value.trim();
  if (urlString === "") return;

  const videoID = parseYoutubeID(urlString);

  if(videoID) {
    iframePlayer.src = `https://youtube.com{videoID}?autoplay=1&mute=1&loop=1&playlist=${videoID}`;
    fallbackBox.style.display = "none";
    iframePlayer.style.display = "block";
  } else {
    alert("Invalid format. Please paste a verified standard Youtube sharing link.");
  }
}); */
//SCRATCHPAD
const scratchpadTextarea = document.getElementById("workspace-notes");
if(scratchpadTextarea) {
    if (localStorage.getItem("lounge_scratchpad_draft")) {
    scratchpadTextarea.value = localStorage.getItem("lounge_scratchpad_draft");
  }

  scratchpadTextarea.addEventListener("input", (e) => {
    localStorage.setItem("lounge_scratchpad_draft", e.target.value);
  });
}

//LIGHT DIMMER
const dimLightsBtn = document.getElementById("dim-lights-btn");
if (dimLightsBtn) {
  if (localStorage.getItem("lounge_lights_dimmed") === "true") {
    document.body.classList.add("espresso-dark-mode");
    dimLightsBtn.innerHTML = `<span class="icon"> ☀︎ </span> Turn on the Lights`;
  }

  dimLightsBtn.addEventListener("click", () => {
    document.body.classList.toggle("espresso-dark-mode");
    const isDimmedActive = document.body.classList.contains("espresso-dark-mode");

    localStorage.setItem("lounge_lights_dimmed", isDimmedActive);

    if (isDimmedActive) {
      dimLightsBtn.innerHTML = `<span class="icon"> ☀︎ </span> Turn on the Lights`;
    } else {
      dimLightsBtn.innerHTML = `<span class="icon"> ❂ </span> Dim the Lights`;
    }
  });
}

updateTimerUI();
});
