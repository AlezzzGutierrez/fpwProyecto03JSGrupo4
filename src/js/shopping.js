const productsShopping = [
    {
        product: "Notebook",
        price: 800000,
        inStock: true,
        image: "../images/products/notebook.jpg"
    },
    {
        product: "Mouse",
        price: 15000,
        inStock: false,
        image: "../images/products/mouse.jpg"
    },
    {
        product: "Teclado",
        price: 30000,
        inStock: true,
        image: "../images/products/teclado.jpg"
    },
    {
        product: "Monitor",
        price: 200000,
        inStock: true,
        image: "../images/products/monitor.jpg"
    }
];

function renderProducts(products) {
    const productList = document.getElementById('product-list');
    if (!productList) return;

    productList.innerHTML = '';

    products.forEach(item => {
        const card = document.createElement('article');
        card.classList.add('product-card');

        const stockText = item.inStock ? 'En stock' : 'Sin stock';
        const stockClass = item.inStock ? 'in-stock' : 'out-of-stock';

        card.innerHTML = `
            <img src="${item.image}" alt="${item.product} imagen" class="product-image">
            <h3 class="product-title">${item.product}</h3>
            <p class="product-price">$${item.price}</p>
            <p class="product-status ${stockClass}">${stockText}</p>
        `;

        productList.appendChild(card);
    });
}

renderProducts(productsShopping);

const btnShowAll = document.getElementById('btn-show-all');
const btnFilterStock = document.getElementById('btn-filter-stock');
const btnBuyStock = document.getElementById('btn-buy-stock');
const btnCalcTotal = document.getElementById('btn-calc-total');

const detalleElement = document.getElementById('detalle');
const totalElement = document.getElementById('total');

/* --- MOSTRAR TODO --- */
if (btnShowAll) {
    btnShowAll.addEventListener('click', () => {
        renderProducts(productsShopping);
    });
}

/* --- FILTRAR POR STOCK --- */
if (btnFilterStock) {
    btnFilterStock.addEventListener('click', () => {
        const productosEnStock = productsShopping.filter(item => item.inStock === true);
        renderProducts(productosEnStock);
    });
}

/* --- COMPRAR PRODUCTOS EN STOCK --- */
if (btnBuyStock) {
    btnBuyStock.addEventListener('click', () => {
        const productosEnStock = productsShopping.filter(item => item.inStock === true);

        const detalleProductos = productosEnStock.map(item => `${item.product} ($${item.price})`);

        const listaTexto = detalleProductos.reduce((acc, prod, index) => {
            return index === 0 ? prod : `${acc}, ${prod}`;
        }, "");

        if (detalleElement) {
            detalleElement.textContent = `El combo incluye: ${listaTexto}.`;
        }
    });
}

/* --- CALCULAR TOTAL --- */
if (btnCalcTotal) {
    btnCalcTotal.addEventListener('click', () => {
        const productosEnStock = productsShopping.filter(item => item.inStock === true);

        const precios = productosEnStock.map(item => item.price);

        const totalCalculado = precios.reduce((acc, price) => acc + price, 0);

        if (detalleElement) {
            detalleElement.textContent = `Se compraron ${productosEnStock.length} productos`;
        }

        if (totalElement) {
            totalElement.textContent = `Total: $${totalCalculado}`;
        }
    });
}