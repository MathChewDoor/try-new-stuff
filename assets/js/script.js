// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Slideshow effect for the hero background images
    const images = [
        "./assets/img/FP_bg.png",  // Add more images if needed
        // Add more image paths here
    ];
    const heroBackground = document.querySelector('.hero-background');
    let currentImageIndex = 0;

    function changeBackgroundImage() {
        heroBackground.style.backgroundImage = `url(${images[currentImageIndex]})`;
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    // Change background image every 5 seconds (5000 milliseconds)
    setInterval(changeBackgroundImage, 5000);

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
