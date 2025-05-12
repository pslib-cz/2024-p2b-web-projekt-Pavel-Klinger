// filepath: restaurace-mellow/restaurace-mellow/src/scripts/main.js
document.addEventListener('DOMContentLoaded', () => {
    // Initialize any global functionality here

    // Example: Smooth scrolling for navigation links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Example: Handle form submission animation
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Trigger animation or feedback here
            alert('Your message has been sent!');
            contactForm.reset();
        });
    }
});