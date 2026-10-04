
// Obtener referencias a los elementos del DOM
const filtroGenero = document.getElementById("filtroGenero");
const btnFiltrar = document.getElementById("btnFiltrar");

// Agregar un evento de clic al botón de filtrar
btnFiltrar.addEventListener("click", () => {
    // Obtener el género seleccionado del filtro
        const generoSeleccionado = filtroGenero.value;
});
const peliculas = [

  { titulo: "Rápidos y Furiosos", genero: "Acción", puntaje: 8 },

  { titulo: "Son como niños", genero: "Comedia", puntaje: 6 },

  { titulo: "El Padrino", genero: "Drama", puntaje: 10 },

  { titulo: "Jhon Wick", genero: "Acción", puntaje: 9 }

];