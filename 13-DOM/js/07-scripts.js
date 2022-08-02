// Cambiar css de un elemento

const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);

// encabezado.style.backgroundColor = 'red';
// encabezado.style.color = 'white';
// encabezado.style.textTransform = 'uppercase';

// Para agrergar una clase a un elemento

const card = document.querySelector('.card');

card.classList.add('nueva-clase', 'segunda-clase'); // agregar una clase
card.classList.remove('nueva-clase'); // quitar una clase
console.log(card.classList);