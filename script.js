document.getElementById("downloadBtn").addEventListener("click", function() {
  gtag('event', 'download', {
      'event_category': 'APK Download',
      'event_label': 'Sonix Movies APK'
  });
});

// Image Carousel Logic
const carousel = document.querySelector('.carousel-container');
const images = document.querySelectorAll('.carousel img');
let index = 0;

document.querySelector('.next').addEventListener('click', function() {
  index = (index + 1) % images.length;
  carousel.style.transform = `translateX(-${index * 100}%)`;
});

document.querySelector('.prev').addEventListener('click', function() {
  index = (index - 1 + images.length) % images.length;
  carousel.style.transform = `translateX(-${index * 100}%)`;
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  document.getElementById('formResponse').textContent = 'Thanks for filling out the form!';
  this.reset();
});
