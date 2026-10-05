document.addEventListener("DOMContentLoaded", () => {
    // Botones (corregido ID 'btn-noche')
    const btnDia = document.getElementById('btn-blanco');
    const btnOscuro = document.getElementById('btn-noche'); 
    const btnSalvia = document.getElementById('btn-salvia');

    const limpiarModos = () => {
        document.body.classList.remove('modo-noche', 'modo-salvia');
    };

    // Modo día
    if (btnDia) {
        btnDia.addEventListener('click', () => {
            limpiarModos();
            console.log('El color de fondo cambió a Modo Día (Blanco)');
        });
    }

    // Modo noche
    if (btnOscuro) {
        btnOscuro.addEventListener('click', () => {
            limpiarModos();
            document.body.classList.add('modo-noche');
            console.log('El color de fondo cambió a Modo Noche (Oscuro)');
        });
    }

    // Modo salvia
    if (btnSalvia) {
        btnSalvia.addEventListener('click', () => {
            limpiarModos();
            document.body.classList.add('modo-salvia');
            console.log('El color de fondo cambió a Modo Salvia');
        });
    }
});