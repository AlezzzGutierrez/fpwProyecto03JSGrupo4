import { filtrarPorGenero } from "../services/moviesservice.js";

const peliculas = [
    { titulo: "Rápidos y Furiosos", genero: "Acción", puntaje: 8 },
    { titulo: "Son como niños", genero: "Comedia", puntaje: 6 },
    { titulo: "El Padrino", genero: "Drama", puntaje: 10 },
    { titulo: "Jhon Wick", genero: "Acción", puntaje: 9 }
];

const filtroGenero = document.getElementById("filtroGenero");
const btnFiltrar = document.getElementById("btnFiltrar");
const listaPeliculas = document.getElementById("listaPeliculas");

btnFiltrar.addEventListener("click", () => {
    const generoSeleccionado = filtroGenero.value;

    const peliculasFiltradas = filtrarPorGenero(
        peliculas,
        generoSeleccionado
    );

    listaPeliculas.innerHTML = "";

    peliculasFiltradas.forEach((pelicula) => {
        const li = document.createElement("li");

        li.textContent = `${pelicula.titulo} - ${pelicula.genero} - Puntaje: ${pelicula.puntaje}`;

        listaPeliculas.appendChild(li);
    });

    console.log(peliculasFiltradas);
});