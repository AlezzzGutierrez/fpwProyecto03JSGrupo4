// shoppingService.js - Lógica de los 4 botones

// BOTÓN 1: Ver todos los productos
function servicioVerTodos() {
    renderProducts(productsShopping);
}

// BOTÓN 2: Filtrar solo disponibles (filter)
function servicioFiltrarEnStock() {
    const productosEnStock = productsShopping.filter(item => item.inStock === true);
    renderProducts(productosEnStock);
}

// BOTÓN 3: Comprar 1 de cada disponible (filter + map + reduce)
function servicioObtenerCombo() {
    const detalleElement = document.getElementById('detalle');
    
    const productosEnStock = productsShopping.filter(item => item.inStock === true);
    const detalleProductos = productosEnStock.map(item => `${item.product} ($${item.price})`);

    const listaTexto = detalleProductos.reduce((acc, prod, index) => {
        return index === 0 ? prod : `${acc}, ${prod}`;
    }, "");

    if (detalleElement) {
        detalleElement.textContent = `El combo incluye: ${listaTexto}.`;
    }
}

// BOTÓN 4: Calcular costo total (filter + map + reduce)
function servicioCalcularTotal() {
    const detalleElement = document.getElementById('detalle');
    const totalElement = document.getElementById('total');

    const productosEnStock = productsShopping.filter(item => item.inStock === true);
    const precios = productosEnStock.map(item => item.price);
    const totalCalculado = precios.reduce((acc, price) => acc + price, 0);

    if (detalleElement) {
        detalleElement.textContent = `Se compraron ${productosEnStock.length} productos`;
    }

    if (totalElement) {
        totalElement.textContent = `Total: $${totalCalculado}`;
    }
}

// Asignar los eventos una vez que el HTML esté completamente cargado en el navegador
document.addEventListener('DOMContentLoaded', () => {
    const btnShowAll = document.getElementById('btn-show-all');
    const btnFilterStock = document.getElementById('btn-filter-stock');
    const btnBuyStock = document.getElementById('btn-buy-stock');
    const btnCalcTotal = document.getElementById('btn-calc-total');

    if (btnShowAll) btnShowAll.addEventListener('click', servicioVerTodos);
    if (btnFilterStock) btnFilterStock.addEventListener('click', servicioFiltrarEnStock);
    if (btnBuyStock) btnBuyStock.addEventListener('click', servicioObtenerCombo);
    if (btnCalcTotal) btnCalcTotal.addEventListener('click', servicioCalcularTotal);
});