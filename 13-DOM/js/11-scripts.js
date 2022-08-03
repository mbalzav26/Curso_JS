// Un Ejemplo más avanzado de lo que podemos hacer con JS

const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

// btnFlotante.addEventListener('click', () => {
//     if( footer.classList.contains('activo')){
//         footer.classList.remove('activo');
//         this.classList.remove('activo');
//         this.textContent = 'Idioma y moneda';
//     }else{
//         footer.classList.add('activo');
//         this.classList.add('activo');
//         this.textContent = 'CERRAR';   
//     }
// })

btnFlotante.addEventListener('click', fCerrar);

function fCerrar(){
    if( footer.classList.contains('activo')){
        footer.classList.remove('activo');
        this.classList.remove('activo');
        this.textContent = 'Idioma y moneda';
    }else{
        footer.classList.add('activo');
        this.classList.add('activo');
        this.textContent = 'CERRAR';   
    }   
}