let currentSlide = 1;
const totalSlides = 9;

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const current = document.getElementById('current-slide');
    
    if (n > totalSlides) currentSlide = 1;
    if (n < 1) currentSlide = totalSlides;
    
    slides.forEach(slide => slide.classList.remove('active'));
    slides[currentSlide - 1].classList.add('active');
    current.textContent = currentSlide;
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function previousSlide() {
    currentSlide--;
    showSlide(currentSlide);
}

// Navegación con teclado
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
    } else if (e.key === 'ArrowLeft') {
        previousSlide();
    }
});

// Inicializar
document.addEventListener('DOMContentLoaded', function() {
    showSlide(1);
    document.getElementById('total-slides').textContent = totalSlides;
});

// Navegación táctil para móviles
let startX = 0;
let endX = 0;

document.addEventListener('touchstart', function(e) {
    startX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', function(e) {
    endX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    if (endX < startX - 50) nextSlide();
    if (endX > startX + 50) previousSlide();
} 