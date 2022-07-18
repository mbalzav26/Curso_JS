// Comparar dos números 

const numero1 = 10;
const numero2 = 20;
const numero3 = "20";

// Si son iguales

console.log(numero1 == numero2);
console.log(numero2 == numero3);
// Este comparado no distingue entre tipo de dato

// Comparado estricto

console.log(numero2 === numero3);
console.log(numero2 === parseInt(numero3));

// Comparar si son diferentes

let password = "admin";
let password1 = "Admin";

console.log(password != password1);
// Al igual que en el ejercicio anterior, este comparado no distingue entre tipo de dato

// comparar si son diferentes estricto
console.log(password !== password1);

