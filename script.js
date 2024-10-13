const sky = document.getElementById("sky");
const message = document.getElementById("message");
const audio = new Audio("./frozenNeptune.mp3");
audio.preload = "auto";
audio.loop = true;
audio.volume = 0.003;
audio.play();
function createStar() {
  const star = document.createElement("div");
  const size = Math.random() * 3 + 1;
  star.className = "star";
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  star.style.animationDuration = `${Math.random() * 3 + 2}s`;
  star.style.animationDelay = `${Math.random() * 3}s`;
  sky.appendChild(star);
}

function createShootingStar() {
  const star = document.createElement("div");
  star.className = "shooting-star";
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 50}%`;
  const starSize = Math.random() * 4 + 1;
  star.style.width = `${starSize}px`;
  star.style.height = `${starSize}px`;
  sky.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 2000);
}

function typeWriter(text, i = 0) {
  if (i < text.length) {
    message.querySelector("p").textContent += text.charAt(i);
    setTimeout(() => typeWriter(text, i + 1), 100);
  }
}

function showMessage() {
  message.style.opacity = 0;
  setTimeout(() => {
    message.querySelector("p").textContent = "";
    message.style.opacity = 1;
    typeWriter("Every star in the sky reminds me of you...");
  }, 1000);
}

// Initialize
const numberOfStars = Math.floor(window.innerWidth / 3);
for (let i = 0; i < numberOfStars; i++) {
  createStar();
}

// Event listeners
sky.addEventListener("click", (e) => {
  const star = document.createElement("div");
  star.className = "star";
  star.style.left = `${e.clientX}px`;
  star.style.top = `${e.clientY}px`;
  star.style.width = "4px";
  star.style.height = "4px";
  sky.appendChild(star);
});

setInterval(createStar, 10000);
setInterval(createShootingStar, 5000);
setTimeout(showMessage, 5000);
