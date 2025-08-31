let images =["123.jpg","234.jpg","345.jpg","456.jpg"];
let currentIndex = 0;

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("toggleImage").src = images[currentIndex];
}
