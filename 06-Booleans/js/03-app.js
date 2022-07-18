// Las grandes compañias usan las siguientes formas para verificar info

const autenticado = true;

if(autenticado){ // es lo mismo si hiciase: if(autenticado == true)
    console.log('Bienvenido');
} else {
    console.log('No autenticado');
}

// hay una variante pero usamamos el operador ternario
console.log(autenticado ? "bienvenido" : "no autenticado");

