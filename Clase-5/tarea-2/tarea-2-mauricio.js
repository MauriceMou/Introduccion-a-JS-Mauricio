//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!
const $botonEnviar = document.querySelector('#enviar-informacion');
const saludoUsuario = document.querySelector('#saludo')
$botonEnviar.onclick = function () {
    event.preventDefault();
    const primerNombre = document.querySelector('#nombre-usuario').value;
    const segundoNombre = document.querySelector('#segundo-nombre-usuario').value;
    const apellidoUsuario = document.querySelector('#apellido-usuario').value;
    const edadUsuario = Number(document.querySelector('#edad-usuario').value);
    saludoUsuario.textContent = `Bienvenido! ${primerNombre} ${segundoNombre} ${apellidoUsuario} de ${edadUsuario} años`
};
document.querySelector('#reset-informacion').onclick = function () {
    return saludoUsuario.textContent = 'Bienvenido/a';
}

