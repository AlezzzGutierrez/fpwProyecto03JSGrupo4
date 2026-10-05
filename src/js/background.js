
// Capturamos los tres botones por su ID
const btnDia = document.getElementById('btn-blanco');
const btnOscuro = document.getElementById('btn-oscuro');
const btnSalvia = document.getElementById('btn-salvia');

// Función auxiliar para quitar clases previas
const limpiarModos = () => {
    document.body.classList.remove('modo-noche', 'modo-salvia');
};

// Evento: MODO DÍA
btnDia.addEventListener('click', () => {
    limpiarModos();
    console.log('El color de fondo cambió a Modo Día (Blanco)');
});

// Evento: MODO NOCHE
btnOscuro.addEventListener('click', () => {
    limpiarModos();
    document.body.classList.add('modo-noche');
    console.log('El color de fondo cambió a Modo Noche (Oscuro)');
});

// Evento: MODO SALVIA
btnSalvia.addEventListener('click', () => {
    limpiarModos();
    document.body.classList.add('modo-salvia');
    console.log('El color de fondo cambió a Modo Salvia');
});
