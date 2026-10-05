# Nayla Leiva

## Proyecto 03 - Grupo N°4 / Inicialización del Proyecto y Navegación

## Fecha de Actualización: 29/09/2026

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

# González Tolay, Esmeralda Rocío

## Proyecto 03 - Grupo N°4 / Ejercicio 3: Calculadora de Precios con IVA

## Fecha de Actualización: 04/10/2026

Desarrollo del Ejercicio 3 del proyecto: una calculadora que toma los productos de un kiosco, cargados sin IVA, y genera una lista nueva con los precios finales (precio + 21% de IVA). El resultado se muestra en pantalla como tarjetas al presionar un botón, con los colores y la tipografía del proyecto.

### Mapeo de Sección del Nav y Ejercicio:

1. **Ejercicio 3: Calculadora de Precios con IVA**
   * **Sección nav:** Calculadora
   * **Descripción:** Un botón calcula el precio final de cada producto y muestra el resultado en tarjetas.
   * **Archivos asociados:** `pages/calculator.html`, `js/consgina3.js`, `css/calculator.css`

### Funcionamiento:

* Se parte de un arreglo `productos` con objetos `{ nombre, precio }`, que no se modifica.
* Con el método `map` se crea un arreglo nuevo, `productosConIVA`, donde cada objeto tiene `nombre` y `precioFinal = precio * 1.21` (el 1 equivale al 100% del precio y el 0.21 al 21% de IVA).
* Al hacer clic en el botón `#btnCalcular` (evento `click` con `addEventListener`), se vacía el contenedor `#resultado` para evitar duplicados y se recorre `productosConIVA` con `forEach`.
* Por cada producto se crea una tarjeta con `createElement`, que muestra el nombre y el precio final con formato de moneda argentina (`Intl.NumberFormat("es-AR")`), por ejemplo `$ 1.210,00`.
* Se usó `textContent` para insertar los textos y `aria-live="polite"` en el contenedor de resultados para accesibilidad.

### Estilos:

* Los estilos se separaron en un archivo propio, `calculator.css`, que se carga después de `styles.css`, para no modificar el código del resto del grupo.
* Reutiliza la paleta del proyecto: `#4B6661` (texto y botón), `#7A9A8B` (bordes y color del header) y `#E2F0D9` (fondo).
* Las tarjetas se acomodan con CSS Grid (`repeat(auto-fit, minmax(190px, 1fr))`), por lo que se adaptan al ancho de la pantalla sin media queries.

**Archivos (Modificados, Creados, Eliminados):**
* **Creados:** `src/js/consgina3.js` (lógica de la calculadora), `src/css/ejercicio3.css` (estilos propios de la calculadora).
* **Modificados:** `src/pages/calculator.html` (estructura de la página: título, botón, contenedor de resultados, y enlaces a `ejercicio3.css` y `consgina3.js`).
* **Eliminados:** Ninguno.

**Uso IA:** Sí: como copiloto (interacción), para la explicación del método `map`, la detección de un error 404 causado por una diferencia entre el nombre del archivo JS y el enlace en el HTML, y la adaptación del diseño a la paleta de colores del proyecto.