// for in

// iterar sobre un objeto

const carro = {
    marca: 'Ford',
    modelo: 'Mustang',
    year: 1969,
}

for(let l in carro){
    console.log(`detalles ${carro[l]}`);
}

// este metodo fue añadido en ECMAScript 7
console.log("+++++++++++++++++ \n");
for(let [i,d] of Object.entries(carro)){
    console.log(`${i} : ${d}`);
}