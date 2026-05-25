document.addEventListener("DOMContentLoaded", function() {
    const carrusel = document.getElementById("carrusel");
    const slides = carrusel.querySelectorAll(".carrusel-slide");
    const dots = carrusel.querySelectorAll(".dot");
    const prevBtn = carrusel.querySelector(".prev");
    const nextBtn = carrusel.querySelector(".next");
    
    let currentSlideIndex = 0;
    let autoplayInterval;

    // Función para mostrar una diapositiva específica por índice
    function showSlide(index) {
        // Asegurar que el índice esté dentro de los límites y sea cíclico
        if (index < 0) {
            index = slides.length - 1;
        } else if (index >= slides.length) {
            index = 0;
        }

        // Quitar la clase 'active' de la diapositiva y punto actuales
        const currentActiveSlide = carrusel.querySelector(".carrusel-slide.active");
        if (currentActiveSlide) {
            currentActiveSlide.classList.remove("active");
        }
        const currentActiveDot = carrusel.querySelector(".dot.active");
        if (currentActiveDot) {
            currentActiveDot.classList.remove("active");
        }

        // Añadir la clase 'active' a la nueva diapositiva y punto
        slides[index].classList.add("active");
        dots[index].classList.add("active");

        // Actualizar el índice de la diapositiva actual
        currentSlideIndex = index;
    }

    // Funciones para los controles de flecha
    function moveSlide(direction) {
        showSlide(currentSlideIndex + direction);
    }

    // Funciones para los puntos de navegación
    function setSlide(index) {
        showSlide(index);
    }

    // Event listeners para los botones de control
    prevBtn.addEventListener("click", () => {
        stopAutoplay();
        moveSlide(-1);
        startAutoplay();
    });

    nextBtn.addEventListener("click", () => {
        stopAutoplay();
        moveSlide(1);
        startAutoplay();
    });

    // Event listeners para los puntos de navegación
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            stopAutoplay();
            setSlide(index);
            startAutoplay();
        });
    });

    // Funciones para el autoplay
    function startAutoplay() {
        // Cambia la diapositiva automáticamente cada 5 segundos
        autoplayInterval = setInterval(() => {
            moveSlide(1);
        }, 5000); 
    }

    function stopAutoplay() {
        clearInterval(autoplayInterval);
    }

    // Inicialización: mostrar la primera diapositiva y arrancar autoplay
    showSlide(currentSlideIndex);
    startAutoplay();
}); 