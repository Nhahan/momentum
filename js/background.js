const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

// create HTML from Javascript
const image = document.createElement("img");

// img src = ...
image.src = `img/${chosenImage}`;

// append HTML source to index.html
document.body.appendChild(image)