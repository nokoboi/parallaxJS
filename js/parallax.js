// Imagen de fondo
document.getElementById('parallax').style.backgroundImage = "url('/assets/parallax.jpg')"

window.addEventListener('scroll', function () {
    let parallax = document.getElementById('parallax');
    let scrollPosition = this.window.scrollY;
    parallax.style.backgroundPositionY = (scrollPosition * 0.7) + 'px';
})