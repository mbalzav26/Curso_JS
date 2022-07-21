//  para eliminar elemento de un carrito con splice

const carrito = [];

const producto = {
    nombre: "monitor",
    precio: 300,
}

const producto2 = {
    nombre: "tv",
    precio: 3000,
}

const producto3 = {
    nombre: "telefono",
    precio: 400,
}

const producto4 = {
    nombre: "cargador", 
    precio: 40,
}

carrito.push(producto, producto2, producto3, producto4);

console.table(carrito);

// para eliminar del inicio del array
// usamos el metdo shift

// carrito.shift();
// console.table(carrito);

// para eliminar del final del array
// usamos el metdo pop

// carrito.pop();
// console.table(carrito);

// si queremos eliminar un elemento en una posicion concreta
// usamos el metodo splice pero hay que indicar la posicion y donde termina

carrito.splice(0,2);
console.table(carrito);



