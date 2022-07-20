// object constructor

// esta forma se conoce como object literal
const producto = {
    nombre: "Monitor",
    precio: 100,
    disponible: true
}

// esta forma se conoce como object constructor

function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    disponible = true
}

// Para crear el objeto

const producto2 = new Producto("monitor", 100);
console.log(producto2);

const producto3 = new Producto("TV", 1000);
console.log(producto3);



