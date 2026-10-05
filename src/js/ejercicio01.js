// ==========================================
// OBTENER ELEMENTOS DEL HTML
// ==========================================

// Obtenemos los elementos del DOM utilizando querySelector
const inputNombre = document.querySelector("#nombre");
const inputApellido = document.querySelector("#apellido");
const inputLibreta = document.querySelector("#libreta");
const boton = document.querySelector("#mostrarDatos");
const tablaDatos = document.querySelector("#tablaDatos");

// ==========================================
// EVENTO DEL BOTÓN
// ==========================================

boton.addEventListener("click", () => {

    // 1. Obtener valores de los inputs usando .value
    const nombre = inputNombre.value;
    const apellido = inputApellido.value;
    const libreta = inputLibreta.value;

    // 2. Crear array con los valores obtenidos
    const datos = [nombre, apellido, libreta];

    // 3. Manipular y mapear el array para crear celdas HTML <td> mediante .map()
    const celdas = datos.map((dato) => {
        return `<td>${dato}</td>`;
    });

    // 4. Unir las celdas dentro de una fila <tr>
    const fila = `<tr>${celdas.join("")}</tr>`;

    // 5. Acumular la nueva fila dentro de la tabla (usando += para no borrar las anteriores)
    tablaDatos.innerHTML += fila;

    // 6. Limpiar los inputs después de agregar los datos (opcional)
    inputNombre.value = "";
    inputApellido.value = "";
    inputLibreta.value = "";
});