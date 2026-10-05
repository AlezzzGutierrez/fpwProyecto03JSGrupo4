# Robe

## Proyecto 03 - Grupo N°4 / Inicialización del Proyecto y Navegación

## Fecha de Actualización: 04/10/2026

Estructuración general del proyecto mediante un contenedor principal (*Home*) que da acceso a los 5 ejercicios asignados, junto a una sección de presentación (*Nosotros*) con tarjetas del grupo. Se implementó un menú de navegación dinámico mediante JavaScript para conectar todas las páginas.

### Mapeo de Secciones del Nav y Ejercicios:

1. **Inicio** 
   * **Sección nav:** Inicio  
   * **Página principal / Home:** Vista contenedora y acceso al proyecto.
   * **Archivos asociados:** `/src/index.html`
   
2. **Nosotros** 
   * **Sección nav:** Nosotros  
   * **Descripción:** Tarjetas de presentación de los integrantes del grupo.
   * **Archivos asociados:** `pages/about.html`

3. **Ejercicio 1: Registro de Estudiantes** 
   * **Sección nav:** Registro  
   * **Archivos asociados:** `pages/register.html`

4. **Ejercicio 2: Modo de Pantalla** 
   * **Sección nav:** Modo  
   * **Archivos asociados:** `pages/background.html`

5. **Ejercicio 3: Calculadora de Precios con IVA**
   * **Sección nav:** Calculadora  
   * **Archivos asociados:** `pages/calculator.html`

6. **Ejercicio 4: Buscador de Películas** 
   * **Sección nav:** Películas  
   * **Archivos asociados:** `pages/movies.html`

7. **Ejercicio 5: Carrito de Compras**
   * **Sección nav:** Carrito  
   * **Archivos asociados:** `pages/shopping.html`

**Archivos (Modificados, Creados, Eliminados):**
* **Creados:** `src/js/header.js` (generación del menú de navegación), `src/css/styles.css` (estilos globales y del nav), `src/pages/about.html`, `src/pages/background.html`, `src/pages/calculator.html`, `src/pages/movies.html`, `src/pages/register.html`, `src/pages/shopping.html`.
* **Modificados:** `src/index.html` (estructura principal y contenedor del header dinámico).

**Uso IA:** Sí: como copiloto (interacción), para la evaluación de estructura, optimización del código, selección de paleta de colores y corrección de redireccionamiento de rutas absolutas para evitar ruptura de links en el menú.


# [Robert Facundo]

## Proyecto 03 - Grupo N°4 / Ejercicio 01 - Registro de Estudiantes

Fecha de actualización: 04/10/2026

Registro de datos de estudiantes (`Nombre`, `Apellido`, `Libreta Universitaria`) capturados mediante campos de texto `<input>`, manipulando sus valores con `.value` y desplegando el resultado dinámicamente en una tabla HTML utilizando el método `.map()`. La vista se integró respetando la estructura base del proyecto (`register.html`).

### Métodos y elementos utilizados

* `querySelector()`: Permite seleccionar y obtener los elementos del DOM (inputs, botón y tabla).
* `.value`: Captura el valor ingresado en cada campo de texto.
* `addEventListener()`: Escucha el evento `click` del botón para desencadenar la inserción de datos.
* `map()`: Recorre el arreglo de datos capturados para transformarlos en celdas `<td>`.
* `join()`: Une el arreglo de celdas en un solo string HTML para armar la fila `<tr>`.
* `innerHTML`: Inserta la fila resultante dentro del cuerpo de la tabla (`<tbody>`).

### Archivos (modificados, creados, eliminados)

**Creados:**
* `src/js/ejercicio01.js`

**Modificados:**
* `src/pages/register.html`

### Uso de IA

Sí: se utilizó ChatGPT como copiloto (interacción) y herramienta de apoyo durante el desarrollo.  
El código fue desarrollado a partir de los requerimientos y decisiones técnicas previamente definidas. La IA se empleó para resolver dudas conceptuales, estructurar la lógica de manipulación del DOM con `.map()`, verificar la integración fluida con la plantilla base de la página `register.html` y asegurar el correcto direccionamiento de módulos JavaScript.