const fechaEvento = new Date('May 23, 2026 16:00:00').getTime();

function actualizarContador() {
    const ahora = new Date().getTime();
    const distancia = fechaEvento - ahora;

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));

    const unidades = document.querySelectorAll('.time-unit span');

    if (distancia > 0) {
        if (unidades.length >= 3) {
            unidades[0].innerHTML = dias;
            unidades[1].innerHTML = horas;
            unidades[2].innerHTML = minutos;
        }
    } else {
        const timerContainer = document.querySelector('.timer');
        if (timerContainer) {
            timerContainer.innerHTML = "¡EL EVENTO YA COMENZÓ!";
        }
    }
}

setInterval(actualizarContador, 1000);
actualizarContador();

const form = document.getElementById('registro');
const contenedor = document.getElementById('contenedor-dinamico');

if (form) {
    form.onsubmit = function(e) {
        e.preventDefault();
        const nombre = document.getElementById('user-name').value;
        const apellido = document.getElementById('user-lastname').value;
        const email = document.getElementById('user-email').value;
        
        contenedor.innerHTML = "<h2>¡Registro Exitoso!</h2><p>Felicidades " + nombre + " " + apellido + ", tu correo ha sido enviado a " + email + " exitosamente.</p>";
    };

    const btnBorrar = document.getElementById('btn-borrar');
    if (btnBorrar) {
        btnBorrar.onclick = function() {
            form.reset();
        };
    }

    const btnOcultar = document.getElementById('btn-ocultar');
    if (btnOcultar) {
        btnOcultar.onclick = function() {
            form.style.display = 'none';
        };
    }
}