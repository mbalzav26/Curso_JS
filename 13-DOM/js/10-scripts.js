// generar html desde js

// crearemos un nuevo enlace

const enlace = document.createElement('a');
enlace.href = 'https://www.google.com';
enlace.textContent = 'Google';
enlace.target = '_blank';
enlace.classList.add('google');
// enlace.onclick = miFuncion();

// function miFuncion() {
//     alert('Diste click en el enlace');
// }



// seleccionamos el contenedor donde lo insertaremos

const navegacion = document.querySelector('.navegacion');
navegacion.insertBefore(enlace, navegacion.children[0]);

// crear un card con js

// seleccionamos el contenedor donde lo insertaremos
const contenedor = document.querySelector('.hacer .contenedor-cards');
//console.log(contendor);

// creamos los elementos
const p1 = document.createElement('p');
const p2 = document.createElement('p');
const p3 = document.createElement('p');

p1.classList.add('concierto');
p1.textContent = 'concierto';

p2.classList.add('titulo');
p2.textContent = 'concierto de Diomedez';

p3.classList.add('precio');
p3.textContent = '$200 por persona';

const div = document.createElement('div');
div.classList.add('info');

const card = document.createElement('div');
card.classList.add('card');

const imagen = document.createElement('img');
imagen.src = 'img/hacer3.jpg';

div.appendChild(p1);
div.appendChild(p2);
div.appendChild(p3);
console.log(div);

card.appendChild(imagen);
card.appendChild(div);
console.log(card);

contenedor.insertBefore(card, contenedor.children[0]);