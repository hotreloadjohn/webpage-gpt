document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    menuIcon.addEventListener('click', function() {
        navLinks.classList.toggle('nav-active');
    });
});

let slideIndex = 0; // Current slide
let slides = document.querySelectorAll(".carousel-inner img");
let carouselInner = document.querySelector(".carousel-inner");
let totalSlides = slides.length;

function updateSlidePosition() {
    carouselInner.style.transform = 'translateX(' + (-slideIndex * 100) + '%)';
}

function moveSlide(n) {
    slideIndex += n;
    if (slideIndex >= totalSlides) { slideIndex = 0; }
    else if (slideIndex < 0) { slideIndex = totalSlides - 1; }
    updateSlidePosition();
    resetTimer(); // Resets the timer for autoplay
}

// Initialize sliding effect
updateSlidePosition();

// Autoplay functionality (Optional based on previous implementation)
let slideInterval = setInterval(function(){ 
    moveSlide(1);
}, 3000);

// Reset timer function for autoplay reset
function resetTimer() {
    clearInterval(slideInterval);
    slideInterval = setInterval(function(){ 
        moveSlide(1);
    }, 3000);
}
