var currentImage = 0;
var images = $(".slider img");
var imageNumber = images.length;
var prevButton = $(".prev-button");
var nextButton = $(".next-button");

function showImage() {
  images.eq(currentImage).css("opacity", 1);
}

function hideImage() {
  images.eq(currentImage).css("opacity", 0);
}

function nextImage() {
  hideImage();
  currentImage = (currentImage + 1) % imageNumber;
  showImage();
}

function prevImage() {
  hideImage();
  currentImage = (currentImage - 1 + imageNumber) % imageNumber;
  showImage();
}

nextButton.on("click", nextImage);
prevButton.on("click", prevImage);

setInterval(nextImage, 3000);
