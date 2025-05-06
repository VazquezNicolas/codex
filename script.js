// Efecto de scroll suave para los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Cambiar el header al hacer scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Añadir clase sticky al header en CSS
const style = document.createElement('style');
style.textContent = `
    .header.sticky {
        background-color: rgba(255, 255, 255, 0.95);
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
`;
document.head.appendChild(style);