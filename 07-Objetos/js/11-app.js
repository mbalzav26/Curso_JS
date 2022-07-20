// Funciones en Objetos y acceder a sus valores

/* para esto usamos la palabra reservada this 
para indicar que vamos a buscar dentro de dicho objeto */

const objeto = {
    nombre: "monitor",
    precio: 100,
    disponible: true,
    mostrarDatos: function () {
        console.log(`El producto: ${this.nombre} \nvale: ${this.precio} `);
    }
}

objeto.mostrarDatos();

