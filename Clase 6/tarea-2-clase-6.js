/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels 
para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente
 el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
const $botonAgregar = document.querySelector('#agregar');
const $botonCalcular = document.querySelector('#calcular');
let id = 1;
$botonAgregar.onclick = function() {
	const label = document.createElement('label');
	const input = document.createElement('input');
	const form = document.querySelector('#formulario');
	const br = document.createElement('br');
	const botonQuitar = document.createElement('button');

	label.textContent = `Integrante N°${id}:`;
	label.id = 'labelAnual' + id;
	input.className = 'salariosAnuales';
	input.id = 'inputAnual' + id;
	input.type = 'number';
	input.placeholder = 'Ingrese salario anual';
	br.id = 'br' + id;
	botonQuitar.textContent = 'Quitar';
	botonQuitar.id = 'quitar' + id;
	botonQuitar.onclick = function() {
		borrarTodo(id);
		return false;

	};
	form.append(label, input, botonQuitar, br);
	id++;
};

function borrarTodo() {
	const $botonQuitarPorID = document.querySelector('#quitar' + (id - 1));
	$botonQuitarPorID.remove();
	const $labelPorID = document.querySelector('#labelAnual' + (id - 1));
	$labelPorID.remove();
	const $inputPorID = document.querySelector('#inputAnual' + (id - 1));
	$inputPorID.remove();
	const $br = document.querySelector('#br' + (id - 1));
	$br.remove();
	id--;
	return false;
}
$botonCalcular.onclick = function() {
	const arraySalariosAnuales = [];
	const nodoSalariosAnuales = document.querySelectorAll('.salariosAnuales');
	for (let i = 0; i < nodoSalariosAnuales.length; i++) {
		arraySalariosAnuales[i] = Number(nodoSalariosAnuales[i].value);
	}
	const $mayor = document.querySelector('#mayor');
	const $menor = document.querySelector('#menor');
	const $promedioAnual = document.querySelector('#promedio-anual');
	const $promedioMensual = document.querySelector('#promedio-mensual');

	let acumuladorAnual = 0;
	for (let i = 0; i < arraySalariosAnuales.length; i++) {
		acumuladorAnual += arraySalariosAnuales[i];
	}
	const anualFinal = acumuladorAnual / arraySalariosAnuales.length;

	const mesesAnio = 12
	const mensualFinal = anualFinal / mesesAnio

	const resultadoMayor = Math.max(...arraySalariosAnuales);
	$mayor.textContent = `El salario anual mayor es $${resultadoMayor}`;

	const resultadoMenor = Math.min(...arraySalariosAnuales);
	$menor.textContent = `El salario anual menor es $${resultadoMenor}`;

	$promedioAnual.textContent = `El salario anual promedio es $${anualFinal}`;

	$promedioMensual.textContent = `El salario mensual promedio es $${mensualFinal}`
}

