/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/
const botonIntegrantes = document.querySelector('#enviar-integrantes');
const cantidadDeIntegrantes = document.querySelector('#integrantes');

botonIntegrantes.onclick = function () {
    event.preventDefault();
    for (let N = 1; N <= cantidadDeIntegrantes.value; N++) {
        const $nodoMaster = document.querySelector('body');
        const div = document.querySelector('div');
        const form = document.querySelector('#formulario-nuevo');
        const br = document.createElement('br');

        $nodoMaster.appendChild(div);
        div.appendChild(form);
        form.appendChild(crearLabel(N));
        form.appendChild(crearInput(N));
        form.appendChild(br);

    }
};

function crearLabel(N) {
    let labelIntregrante = document.createElement('label');
    labelIntregrante.id = 'label-edades-' + N
    labelIntregrante.setAttribute = 'for', 'input-edades-' + N;
    labelIntregrante.textContent = 'Edad de integrante N°' + N;

    return labelIntregrante;
}
function crearInput(N) {
    let inputIntegrante = document.createElement('input');
    inputIntegrante.id = 'input-edades-' + N;
    inputIntegrante.type = 'number';

    return inputIntegrante;
}


