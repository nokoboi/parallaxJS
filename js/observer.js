const imagen1 = document.getElementById('img1');
const imagen2 = document.getElementById('img2');

const restricciones = {
    root: null, // null por defecto es la pantalla
    rootMargin: '0px',
    threshold: 1, // valor de 0 a uno

}

// Creamos un nuevo intersection observer el cual recibe dos argumentos
const observador = new IntersectionObserver(cargarImagen, restricciones);
observador.observe(imagen1);
observador.observe(imagen2);

function cargarImagen(entradas, observador){
    entradas.forEach(entrada => {
        if(entrada.isIntersecting){// si la imagen ha entrado en pantalla
            entrada.target.classList.add('visible');
        }else{
            entrada.target.classList.remove('visible')
        }
    });
}