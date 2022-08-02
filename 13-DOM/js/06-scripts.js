// Modificar Textos o Imagenes con JS

const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);

console.log(encabezado.innerText); // si el vissibility es hidden, no se puede acceder a el
console.log(encabezado.textContent); // si lo accede 
console.log(encabezado.innerHTML);  // te trae las etq html

// podemos modificar el texto

//encabezado.innerText = 'Hola Mundo';
document.querySelector('.contenido-hero h1').textContent = 'Bienvenido';

// modificar una imagen

// primera forma
//const imagen = document.querySelector('.card img').src = 'img/hacer2.jpg';

// segunda forma
const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg';
