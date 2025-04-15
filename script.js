// Scroll animation
const animElements = document.querySelectorAll('.animate');
window.addEventListener('scroll', () => {
    animElements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add('visible');
        }
    });
});

// Initial trigger
window.dispatchEvent(new Event('scroll'));
