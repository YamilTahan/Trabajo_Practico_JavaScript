const inputCorreo = document.getElementById('correo');
const btnGuardar = document.getElementById('save');
const btnEliminar = document.getElementById('del');
const pCorreo = document.getElementById('email');

window.onload = function() {
const correoGuardado = localStorage.getItem('correo');
if (correoGuardado) {
    mostrarCorreo(correoGuardado);
}
}

function mostrarCorreo(correo) {
pCorreo.innerHTML = `Correo guardado: ${correo}`
}

btnGuardar.addEventListener('click', function() {
const correo = inputCorreo.value
if (correo) {
    localStorage.setItem('correo', correo);
    mostrarCorreo(correo)
}
});

btnEliminar.addEventListener('click', function() {
localStorage.removeItem('correo')
pCorreo.innerHTML = ''
});
