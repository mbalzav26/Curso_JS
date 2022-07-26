// ejercicio de reproductor de musica con arrow function

const reproductor = {
    pista: " ",
    reproducir: cancion => console.log(`Reproduciendo ${cancion}`),
    pausar: cancion => console.log(`Pausando ${cancion}`),
    borrar: cancion => console.log(`Borrando ${cancion}`),
    agregarPlaylist: genero =>console.log(`Agregando playlist de ${genero}`),
    reproducirPlaylist: genero => console.log(`Reproduciendo playlist de ${genero}`),

    set nuevaPista(pista){
        this.pista = pista;
        console.log(`Nueva pista: ${this.pista}`);
    },

    get obtenerPista(){ 
        console.log(`Pista actual: ${this.pista}`); 
    }
}

reproductor.nuevaPista = "La formulita";
reproductor.obtenerPista;

reproductor.reproducir('La vida es bella');
reproductor.pausar('La vida es bella');
reproductor.borrar('La vida es bella');
reproductor.agregarPlaylist('Pop');
reproductor.reproducirPlaylist('Pop');