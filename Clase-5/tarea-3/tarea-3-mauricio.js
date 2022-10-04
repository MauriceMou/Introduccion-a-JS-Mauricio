//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.


const botonCrearClase = document.querySelector('#agregar');
const botonReset = document.querySelector('#reset');
const botonCalcular = document.querySelector('#calcular-total');

const $nodoMaster = document.querySelector('body');
const $div = document.createElement('div');
const $form = document.createElement('form');
const $label = document.createElement('label');
const $inputHoras = document.createElement('input');
const $inputMinutos = document.createElement('input');
const $inputSegundos = document.createElement('input');
const $primerParrafo = document.createElement('p');
const $segundoParrafo = document.createElement('p');
const $tercerParrafo = document.createElement('p');




function crearInput() {
    //$nodoMaster.append($div, $form, $primerParrafo, $inputHoras, $segundoParrafo, $inputMinutos, $tercerParrafo, $inputSegundos);
    $nodoMaster.appendChild($div)
    $div.appendChild($form)
    $form.appendChild($inputHoras)
    $form.appendChild($inputMinutos)
    $form.appendChild($inputSegundos)
    $form.setAttribute('class', 'formulario');
    $inputHoras.setAttribute('type', 'Number');
    $inputMinutos.setAttribute('type', 'Number');
    $inputSegundos.setAttribute('type', 'Number');
    $inputHoras.setAttribute('class', 'horas');
    $inputMinutos.setAttribute('class', 'minutos');
    $inputSegundos.setAttribute('class', 'segundos');
    $inputHoras.setAttribute('placeholder', 'HORAS');
    $inputMinutos.setAttribute('placeholder', 'MINUTOS');
    $inputSegundos.setAttribute('placeholder', 'SEGUNDOS');
}

botonCrearClase.onclick = function () {
    const cantidadDeClases = document.querySelector('#clases').value
    for(let i= 0; i <= cantidadDeClases; i++){
        crearInput()
    }

}


