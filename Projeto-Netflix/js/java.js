var carouselContainer = document.querySelector('.carousel-container');
var carouselItems = document.querySelectorAll('.carousel-item');
var currentIndex = 0;
var clickCountRight = 0;
var clickCountLeft = 0;

function showSlide(index) {
  if (index < 0) {
    index = carouselItems.length - 1;
  } else if (index >= carouselItems.length) {
    index = 0;
  }

  carouselContainer.style.transform = 'translateX(-' + (index * 200) + 'px)';
  currentIndex = index;
}

function prevSlide() {
  if (clickCountLeft < 4) {
    showSlide(currentIndex - 1);
    
    clickCountRight--;
  }
}

function nextSlide() {
  if (clickCountRight < 4) {
    showSlide(currentIndex + 1);
    clickCountRight++;
    clickCountLeft--;
  }
}
