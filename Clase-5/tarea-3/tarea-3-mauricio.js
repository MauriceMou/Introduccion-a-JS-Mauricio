//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.
const botonCrearClase = document.querySelector("#agregar");
const botonReset = document.querySelector("#reset");
const botonCalcular = document.querySelector("#calcular-total");

function createElemByTag(tag, isNumber) {
    const elem = document.createElement(tag);
    if (isNumber) {
        elem.setAttribute("type", "number");
    }
    return elem;
}

function crearInput() {
    const $nodoMaster = document.querySelector("body");

    const div = createElemByTag("div");

    $nodoMaster.appendChild(div);

    const form = createElemByTag("form");
    div.appendChild(form);
    const horas = createElemByTag("input", true);
    horas.setAttribute("placeholder", "HORAS");
    form.appendChild(horas);
    const minutos = createElemByTag("input", true);
    minutos.setAttribute("placeholder", "MINUTOS");
    form.appendChild(minutos);
    const segundos = createElemByTag("input", true);
    segundos.setAttribute("placeholder", "SEGUNDOS");
    form.appendChild(segundos);
}

botonCrearClase.onclick = function () {
    const cantidadDeClases = document.querySelector("#clases").value;
    for (let i = 0; i <= cantidadDeClases; i++) {
        crearInput();
    }
};

