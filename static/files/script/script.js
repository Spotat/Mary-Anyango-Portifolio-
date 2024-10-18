// const navToggle = document.getElementsByClassName('.nav-toggle');
// const navLinks = document.getElementsByClassName('.nav-links');
// navToggle.addEventListener('click', ()=> {
//     navLinks.classList.toggle('active')
// })
// const showSlide = (direction) => {}
function openNav() {
    document.getElementById("sideNav").style.width = "95%"
}
function closeNav() {
    document.getElementById("sideNav").style.width = "0%"
}
let currentIndex = 0;
const slide = document.querySelector(".testimonial-slider");
const totalSlides = document.querySelectorAll(".testimonial").length;

const showSlide = (slideIndex) => {
    
}
const moveSlide = (index) => {
    currentIndex += index;
    showSlide(1)
    slide.style.transform = `translateX(-${currentIndex * 20}%)`;
}

const autoSlide = () => {
    moveSlide(1);
    setTimeout(autoSlide, 3000)
}

// initialize slider
// document.addEventListener("DOMContentLoaded", () => {
//     showSlide(currentIndex);
//     // showDot(index)
//     autoSlide();
// })

// reveal funs

function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top
        const elementVisibe = 100;

        if (elementTop < windowHeight - elementVisibe) {
            reveals[i].classList.add("active")
        } else {
            reveals[i].classList.remove("active")
        }
    }
}
window.addEventListener('scroll', reveal)


// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry)
//         if (entry.isIntersecting) {
//             entry.target.classList.add('.show')
//         } else {
//             entry.target.classList.remove('.show')
//         };
//     });
// });

// const hiddenElements = document.querySelectorAll('.reveal');
// hiddenElements.forEach((el) => observer.observe(el))