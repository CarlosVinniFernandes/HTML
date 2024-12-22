let currentIndex = 0;

function moveCarousel(direction) {
    console.log("Direção:", direction);
    console.log("Índice atual antes:", currentIndex);

    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    console.log("Índice atual depois:", currentIndex);

    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

document.querySelector('.carousel-button.prev').addEventListener('click', () => moveCarousel(-1));
document.querySelector('.carousel-button.next').addEventListener('click', () => moveCarousel(1));
