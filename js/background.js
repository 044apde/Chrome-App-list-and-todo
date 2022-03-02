const images = ["0.jpeg", "1.jpeg"];
const bgImage = document.createElement("img");

choosenImage = images[Math.floor(Math.random() * images.length)];

bgImage.src = `/img/${choosenImage}`;

document.body.appendChild(bgImage);