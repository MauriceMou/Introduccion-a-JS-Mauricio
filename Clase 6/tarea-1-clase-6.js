/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/
const botonIntegrantes = document.querySelector('#enviar-integrantes');
const cantidadDeIntegrantes = document.querySelector('#integrantes');
const botonCalcular = document.querySelector('#calcular');
const botonReset = document.querySelector('#reset');

botonIntegrantes.onclick = function() {
    event.preventDefault();
    for (let N = 1; N <= cantidadDeIntegrantes.value; N++) {
        const form = document.querySelector('#formulario-nuevo');
        const br = document.createElement('br');

        form.appendChild(crearLabel(N));
        form.appendChild(crearInput(N));
        form.appendChild(br);
        botonCalcular.disabled = false;
        botonReset.disabled = false;
        botonIntegrantes.disabled = true;
        cantidadDeIntegrantes.disabled = true;

    }
};

function crearLabel(N) {
    let labelIntregrante = document.createElement('label');
    labelIntregrante.id = 'label-edades-' + N;
    labelIntregrante.setAttribute = 'for', 'input-edades-' + N;
    labelIntregrante.textContent = 'Edad de integrante N°' + N;

    return labelIntregrante;
}

function crearInput(N) {
    let inputIntegrante = document.createElement('input');
    inputIntegrante.id = 'input-edades-' + N;
    inputIntegrante.className = 'edad-usuario';
    inputIntegrante.type = 'number';

    return inputIntegrante;
}
botonCalcular.onclick = function() {
    event.preventDefault();
    const arrayResultados = [];
    const $nodoResultados = document.querySelectorAll('.edad-usuario');
    for (let i = 0; i < $nodoResultados.length; i++) {
        arrayResultados[i] = Number($nodoResultados[i].value);
    }
    const $resultadoMayor = document.querySelector('#mayor');
    const $resultadoMenor = document.querySelector('#menor');
    const $resultadoPromedio = document.querySelector('#promedio');

    let acumuladorPromedio = 0;
    for (let i = 0; i < arrayResultados.length; i++) {
        acumuladorPromedio += arrayResultados[i];
    }
    const promedioFinal = acumuladorPromedio / arrayResultados.length;
    $resultadoPromedio.textContent = `El promedio de edad del grupo familiar es de ${promedioFinal}`;

    const menorFinal = Math.min(...arrayResultados);
    $resultadoMenor.textContent = `La menor edad del grupo familiar es ${menorFinal}`;

    const mayorFinal = Math.max(...arrayResultados);
    $resultadoMayor.textContent = `La mayor edad del grupo familiar es ${mayorFinal}`;
};
botonReset.onclick = function() {
    document.querySelector('#formulario-nuevo').innerHTML = '';
}
