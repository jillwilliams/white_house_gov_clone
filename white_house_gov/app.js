// this is for the news,gallery,live stream.... 

const navContainer = document.getElementById('navContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const scrollAmount = 200; // Pixels to scroll per click

prevBtn.addEventListener('click', () => {
        navContainer.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    nextBtn.addEventListener('click', () => {
    navContainer.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 900) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
