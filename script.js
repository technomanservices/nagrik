document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.innerHTML = navLinks.classList.contains('active') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    // Semantic form handling for better UX (optional)
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        // e.preventDefault(); // Uncomment if using AJAX
        // alert('धन्यवाद! तुमची चौकशी पाठवण्यात आली आहे. आम्ही लवकरच तुमच्याशी संपर्क साधू.');
    });
});
