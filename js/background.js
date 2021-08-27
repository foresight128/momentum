const images = ["0.jpg","1.jpg","2.jpg","3.jpg"];

const chosenImgage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `images/${chosenImgage}`;

document.body.appendChild(bgImage);