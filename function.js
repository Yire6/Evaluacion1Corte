const carousel = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');

let currentIndex = 0;

function updateCarousel() {
    const width = images[0].clientWidth;
    carousel.style.transform = `translateX(-${currentIndex * width}px)`;
}

function autoSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
}

setInterval(autoSlide, 5000);

window.addEventListener('resize', updateCarousel);

document.getElementById('registro-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const carrera = document.getElementById('carrera').value;
    const conferencias = document.querySelectorAll('input[name="conferencia"]:checked');

    if (!nombre || !email || !carrera || conferencias.length === 0) {
        alert('Por favor, completa todos los campos y selecciona al menos una conferencia.');
        return;
    }

    const emailRegex = /^[^\s@]+@uamv\.edu\.ni$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, ingresa un correo electrónico válido con el dominio @uamv.edu.ni.');
        return;
    }

    alert('¡Registro exitoso! Nos pondremos en contacto contigo pronto.');

    document.getElementById('registro-form').reset();
});