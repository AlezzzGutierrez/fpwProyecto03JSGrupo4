export const filtrarPorGenero = (peliculas, genero) => {
    if (genero === "todos") {
        return peliculas;
    }

    return peliculas.filter(pelicula => pelicula.genero === genero);
};