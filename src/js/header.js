/* Declaración de Variables */

const elementsNav = [
    {
        title: 'Inicio',
        url: '/src/index.html',
        icon: 'home'
    },
    {
        title: 'Nosotros',
        url: '/src/pages/about.html',
        icon: 'diversity_3'
    },
    {
        title: 'Registro',
        url: '/src/pages/register.html',
        icon: 'school'
    },
    {
        title: 'Modo',
        url: '/src/pages/background.html',
        icon: 'routine'
    },
    {
        title: 'Calculadora',
        url: '/src/pages/calculator.html', 
        icon: 'calculate'
    },
    {
        title: 'Peliculas',
        url: '/src/pages/movies.html',
        icon: 'movie'
    },
    {
        title: 'Carrito',
        url: '/src/pages/shopping.html',
        icon: 'shopping_cart'
    }
];

/* Busca en el HTML el elemento con el ID nav-list */
const navList = document.getElementById('nav-list');

/* Si lo encuentra entonces... */
if (navList) {
    /* Recorre el array por cada vuelta 'item' tomo los valores del objeto en esa posición*/
    elementsNav.forEach(item => {
        /* Crea el elemento li HTML */
        const li = document.createElement('li');
        /* Agrega la clase nav-item usada en CSS */
        li.classList.add('nav-item');

        /* Define el contenido interno del <li> 'a y span' inyectando las propiedades del objeto actual */
        li.innerHTML = `
            <a class="nav-link" href="${item.url}">
                <span class="material-symbols-outlined">${item.icon}</span>${item.title}
            </a>
        `;  

        /* Agrega el li creado al HTML */
        navList.appendChild(li);
    });
}