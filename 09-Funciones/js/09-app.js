// Añadir Funciones en un Objeto

/*  le podemos crear metodo a un objeto usando funciones
esto se le conoce como metodos de un objeto */

const reproductor = {
    reproducir: function(cancion){
        console.log(`Reproduciendo ${cancion}`);
    },
    pausar: function(cancion){
        console.log(`Pausando ${cancion}`);
    },
    borrar: function(cancion){
        console.log(`Borrando ${cancion}`);
    },
    agregarPlaylist: function(genero){
        console.log(`Agregando playlist de ${genero}`);
    },
    reproducirPlaylist: function(genero){
        console.log(`Reproduciendo playlist de ${genero}`);
    }
}

reproductor.reproducir('La vida es bella');
reproductor.pausar('La vida es bella');
reproductor.borrar('La vida es bella');
reproductor.agregarPlaylist('Pop');
reproductor.reproducirPlaylist('Pop');

/* Esta sintaxis se le conoce como metodo de propiedad*/