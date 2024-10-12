const sky = document.getElementById("sky");
//static stars

const numberOfStars = window.innerWidth / 2;
for (let i = 0; i < numberOfStars; i++) {
  const star = document.createElement("div");
  const size = Math.random() * 3 + 1;
  star.className = "star";
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  star.style.animationDelay = `${Math.random() * 2}s`;
  sky.appendChild(star);
}

//shooting stars
function createShootingStar() {
  const size = (Math.random() + 1) * 3;

  const star = document.createElement("div");
  star.className = "shooting-star";
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  sky.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 3000);
}

setInterval(createShootingStar, 1000);

const message = document.querySelector(".message");
const makeTextAppear = () => {
  message.style.display = "flex";
};

setTimeout(makeTextAppear, 5000);
