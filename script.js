const sky = document.getElementById("sky");
//static stars
for (let i = 0; i < 150; i++) {
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
  }, 2000);
}

setInterval(createShootingStar, 1000);


//moon
const moon = document.querySelector(".moon");
const randomSpots = () => {
    for (let i = 0; i < 10; i++) {
        const spot = document.createElement("div");
        spot.className = "spot";
        const size = Math.random() * 5 + 2; 
        spot.style.width = `${size}px`;
        spot.style.height = `${size}px`;
        spot.style.opacity = Math.random(); 

        const moonRadius = moon.offsetWidth / 2;
        const angle = Math.random() * 2 * Math.PI; 
        const distance = Math.random() * (moonRadius - size / 2); 

        const x = moonRadius + distance * Math.cos(angle) - size / 2;
        const y = moonRadius + distance * Math.sin(angle) - size / 2;

        spot.style.left = `${x}px`;
        spot.style.top = `${y}px`;

        moon.appendChild(spot);
    }
}

randomSpots();


const message = document.querySelector(".message");
const makeTextAppear = () => {
    message.style.display = "flex";
}

setTimeout(makeTextAppear, 5000);



