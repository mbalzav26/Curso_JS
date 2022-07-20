// Como unir 2 objetos

const objeto = {
    nombre: "Monitor",
    precio: 100,
    disponible: true
}

const info = {
    marca: "LG",
    pais: "China"
}

// Primera Forma usamos el Object.assign

const resultado = Object.assign(objeto, info);
console.log(resultado);

console.log("----------------");

// Segunda forma usamos el Spread Operator o Read Operator

const resultado2 = {...objeto, ...info};
console.log(resultado2);