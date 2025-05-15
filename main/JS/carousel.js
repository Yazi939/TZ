document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.carousel-img');
    const prevBtn = document.querySelector('.carousel-arrow.prev');
    const nextBtn = document.querySelector('.carousel-arrow.next');
    let current = 0;

    function showImage(idx) {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === idx);
        });
    }

    prevBtn.addEventListener('click', function () {
        current = (current - 1 + images.length) % images.length;
        showImage(current);
    });

    nextBtn.addEventListener('click', function () {
        current = (current + 1) % images.length;
        showImage(current);
    });

    showImage(current);
}); 