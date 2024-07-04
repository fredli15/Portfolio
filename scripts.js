// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".projects-slider");
    const cards = document.querySelectorAll(".project-card");
    const prevButton = document.querySelector(".slider-prev");
    const nextButton = document.querySelector(".slider-next");

    let currentIndex = 0;
    const cardWidth = cards[0].offsetWidth; // Mendapatkan lebar setiap card

    function slideNext() {
        if (currentIndex < cards.length - 1) {
            currentIndex++;
            slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        }
    }

    function slidePrev() {
        if (currentIndex > 0) {
            currentIndex--;
            slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        }
    }

    nextButton.addEventListener("click", slideNext);
    prevButton.addEventListener("click", slidePrev);
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
});