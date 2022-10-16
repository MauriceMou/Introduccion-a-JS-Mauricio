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
        elem.setAttribute("type", 'number');
    }
    return elem;
}

function crearInput() {
    const $nodoMaster = document.querySelector("body");
    const h2 = document.querySelector('h2');
    const div = createElemByTag("div");

    h2.appendChild(div);

    const form = createElemByTag("form");
    form.setAttribute('class', 'formularios');
    div.appendChild(form);
    const horas = createElemByTag("input", true);
    horas.setAttribute("placeholder", "HORAS");
    horas.setAttribute('id', 'horas');
    form.appendChild(horas);
    const minutos = createElemByTag("input", true);
    minutos.setAttribute("placeholder", "MINUTOS");
    minutos.setAttribute('id', 'minutos');
    form.appendChild(minutos);
    const segundos = createElemByTag("input", true);
    segundos.setAttribute("placeholder", "SEGUNDOS");
    segundos.setAttribute('id', 'segundos');
    form.appendChild(segundos);
}

botonCrearClase.onclick = function () {
    const cantidadDeClases = document.querySelector("#clases").value;
    for (let i = 1; i <= cantidadDeClases; i++) {
        crearInput();
    }
};
botonCalcular.onclick = function () {

    const horasVideos = document.querySelectorAll('#horas');
    let acumuladorHoras = 0;
    for (let i = 0; i < horasVideos.length; i++) {
        acumuladorHoras += Number(horasVideos[i].value);
    }

    const minutosVideos = document.querySelectorAll('#minutos');
    let acumuladorMinutos = 0;
    for (let i = 0; i < minutosVideos.length; i++) {
        acumuladorMinutos += Number(minutosVideos[i].value);
    }

    const segundosVideos = document.querySelectorAll('#segundos');
    let acumuladorSegundos = 0;
    for (let i = 0; i < segundosVideos.length; i++) {
        acumuladorSegundos += Number(segundosVideos[i].value);
    }

    const segundosEnHora = 3600;
    const segundosEnMinuto = 60;
    const minutosEnHora = 60;
    let acumuladorHorasASegundos = horasASegundos();
    let acumuladorMinutosASegundos = minutosASegundos();

    function horasASegundos() {
        return acumuladorHoras * segundosEnHora;

    }
    function minutosASegundos() {
        return acumuladorMinutos * segundosEnMinuto;
    }
    let tiempoFinalEnSegundos = acumuladorHorasASegundos + acumuladorMinutosASegundos + acumuladorSegundos;

    const minutosSobrantes = tiempoFinalEnSegundos / segundosEnMinuto;
    const segundosFinales = Math.floor(tiempoFinalEnSegundos % segundosEnMinuto);

    const horasSobrantes = minutosSobrantes / minutosEnHora;
    const minutosFinales = Math.floor(minutosSobrantes % minutosEnHora);

    const resultado = document.querySelector('#resultado');
    resultado.innerText = `Todos los videos de r/argentina programa duran: ${Math.floor(horasSobrantes)} Horas, ${minutosFinales} Minutos, ${segundosFinales} Segundos`;

};
botonReset.onclick = function () {
    document.querySelector('h2').innerHTML = '';
    document.querySelector('#resultado').innerHTML = '';
};
