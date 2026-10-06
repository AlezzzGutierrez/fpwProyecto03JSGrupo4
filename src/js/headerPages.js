/* Declaración de Variables */
const elementsNav = [
    {
        title: 'Inicio',
        url: '../index.html',
        icon: 'home'
    },
    {
        title: 'Nosotros',
        url: './about.html',
        icon: 'diversity_3'
    },
    {
        title: 'Registro',
        url: './register.html',
        icon: 'school'
    },
    {
        title: 'Modo',
        url: './background.html',
        icon: 'routine'
    },
    {
        title: 'Calculadora',
        url: './calculator.html',
        icon: 'calculate'
    },
    {
        title: 'Peliculas',
        url: './movies.html',
        icon: 'movie'
    },
    {
        title: 'Carrito',
        url: './shopping.html',
        icon: 'shopping_cart'
    }
];

/* Renderizado del menú */
const navList = document.getElementById('nav-list');

if (navList) {
    elementsNav.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('nav-item');
        li.innerHTML = `
            <a class="nav-link" href="${item.url}">
                <span class="material-symbols-outlined">${item.icon}</span>${item.title}
            </a>
        `;
        navList.appendChild(li);
    });
}