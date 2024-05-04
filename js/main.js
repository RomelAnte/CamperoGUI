var carousel = document.getElementById('carousel1');
var index = 0;

function rotateCarousel(direction) {
    index = (index + direction) % carousel.children.length;
    if (index < 0) index += carousel.children.length;
    carousel.style.transform = 'translateX(' + (-index * 200) + 'px)';
}