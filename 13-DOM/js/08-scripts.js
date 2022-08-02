// traversing the DOM moverse en el DOM

const navegacion = document.querySelector('.navegacion');
console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);
//console.log(navegacion);
//console.log(navegacion.childNodes);// los espacios son elementos con childNodes
//console.log(navegacion.children);// solo toma los elementos HTML

//console.log(navegacion.children[1].nodeType);// toma el elemento HTML

const card = document.querySelector('.card');
console.log(card);

// traversing del padre a los hijos usamos children
// card.children[1].children[1].textContent = 'Hola Mundo';
// card.children[0].src = 'img/hacer3.jpg';
// console.log(card.children[1].children[1].textContent);

// tarversing del hijo a los padres usamos parentElement

// console.log(card.parentElement.parentElement);

// traversing de los hermanos usamos nextElementSibling y previousElementSibling

// console.log(card.nextElementSibling.nextElementSibling);

// const ultimoCard = document.querySelector('.card:last-child');
// console.log(ultimoCard.previousElementSibling);

