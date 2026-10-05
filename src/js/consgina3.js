const productos = [
  { nombre: "Coca", precio: 1000 },
  { nombre: "Pan", precio: 500 },
  { nombre: "Leche", precio: 1200 }
];

// Nuevo arreglo con el precio final (precio + 21% de IVA)
const productosConIVA = productos.map(producto => ({
  nombre: producto.nombre,
  precioFinal: producto.precio * 1.21
}));

const btnCalcular = document.getElementById("btnCalcular");
const resultado = document.getElementById("resultado");

// Formato de peso: $ 1.210,00
const formatoPesos = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS"
});

btnCalcular.addEventListener("click", () => {
  resultado.innerHTML = "";

  productosConIVA.forEach(producto => {
    const tarjeta = document.createElement("article");
    tarjeta.className = "product-card";

    const nombre = document.createElement("h2");
    nombre.className = "product-name";
    nombre.textContent = producto.nombre;

    const precio = document.createElement("p");
    precio.className = "product-price";
    precio.textContent = formatoPesos.format(producto.precioFinal);

    const detalle = document.createElement("p");
    detalle.className = "product-note";
    detalle.textContent = "Precio final con IVA";

    tarjeta.append(nombre, precio, detalle);
    resultado.appendChild(tarjeta);
  });
});