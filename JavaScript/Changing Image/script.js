// Array of images
let images = ["img1.jpg", "img2.jpg", "img4.jpg"];
let index = 0;

// Get elements
let carouselImage = document.getElementById("carouselImage");
let leftBtn = document.getElementById("leftBtn");
let rightBtn = document.getElementById("rightBtn");

// Show next image
rightBtn.addEventListener("click", () => {
  index = (index + 1) % images.length; // loop back to first image
  carouselImage.src = images[index];
});

// Show previous image
leftBtn.addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length; // loop back to last image
  carouselImage.src = images[index];
});
