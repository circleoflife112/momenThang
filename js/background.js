const images = [
  "scenery1.jpg",
  "scenery2.jpg",
  "scenery3.jpg",
  "scenery4.jpg",
  "scenery5.jpg",
  "scenery6.jpg",
  "scenery7.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.prepend(bgImage);
