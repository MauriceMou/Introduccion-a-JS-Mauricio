//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

const $nodeList = document.querySelectorAll('li');

console.log($nodeList);
console.log($nodeList[2].innerText);

const array = [];

for (let i = 0; i < $nodeList.length; i++) {
    array[i] = Number($nodeList[i].innerText);
}
console.log(array);

const $promedio = document.querySelector('#lista-promedio');

let acumuladorPromedio = 0;

for (let i = 0; i < array.length; i++) {
    acumuladorPromedio += array[i];
}
console.log(acumuladorPromedio);

let promedioTotal = acumuladorPromedio / array.length;
console.log(promedioTotal);

const maximoNumero = Math.max(...array);
console.log(maximoNumero);

const minimoNumero = Math.min(...array);
console.log(minimoNumero)

const $promedioFinal = document.querySelector('#lista-promedio')
const $numeroGrande = document.querySelector('#lista-mas-grande')
const $numeroChico = document.querySelector('#lista-mas-chico')
$promedioFinal.innerText = `El promedio total de la lista es ${promedioTotal}`
$numeroGrande.innerText = `El numero mas grande de la lista es ${maximoNumero}`
$numeroChico.innerText = `El numero mas chico de la lista es ${minimoNumero}`
