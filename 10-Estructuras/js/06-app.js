// sentencia && operador

let usuario = true;
let pago = false;

if (usuario && pago) {
    console.log('Bienvenido a comprar');
}else if(usuario && !pago){
    console.log('Recarga tu cuenta');
}
else{
    console.log('No puede comprar');
}