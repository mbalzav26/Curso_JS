// query selector

/* te va a retornar un solo elemento 
y puedes selccionar tanto clases como id */

const card = document.querySelector('.card');
console.log(card);

// como en css podemos seleccionar al elemnto padre e hijo
const info = document.querySelector('.premium .info');
console.log(info);

// para seleccionar elementos por su posicion
const info2 = document.querySelectorAll('section.hospedaje .card:nth-child(2)');
console.log(info2);

// para seleccionar por id
const form = document.querySelector('#formulario');
console.log(form);

// para seleccionar por etiqueta
const nav = document.querySelector('nav');
console.log(nav);