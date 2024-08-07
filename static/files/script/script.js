let currentIndex = 0;

function showSlide(direction) {
    const slides = document.querySelector(".testimonial-slider");
    const totalSlides = document.querySelectorAll(".testimonial");
    currentIndex += direction;

    if(currentIndex >= totalSlides.length) {
        currentIndex = 0;
    } else if(currentIndex < totalSlides.length) {
        currentIndex = totalSlides - 1
    } 
    slides.style.transform = `translateX(-${currentIndex * .5}%)`;
}
setInterval(() => {
    showSlide(1)
}, 50);