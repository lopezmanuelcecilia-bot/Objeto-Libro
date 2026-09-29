const libro = {
    titulo: "El Alquimista",
    autor: "Paulo Coelho",
    anio: 1988,
    estado: "disponible",
    capitulos: [],

    describirLibro: function() {
        console.log("Libro titulado " + this.titulo + ", escrito por " + this.autor + " en el año " + this.anio + ", el estado es: " + this.estado + ".");
    },

    agregarCapitulo: function(capitulo) {
        this.capitulos.push(capitulo);
    },

    eliminarCapitulo: function(capitulo) {
        const indice = this.capitulos.indexOf(capitulo);
        if (indice !== -1) {
            this.capitulos.splice(indice, 1);
        }
    }
};

libro.describirLibro();
libro.agregarCapitulo("Introducción");
libro.agregarCapitulo("El Encuentro");
console.log(libro.capitulos);
libro.eliminarCapitulo("Introducción");
console.log(libro.capitulos);
