// Variables para los valores constantes de la suma
const VALOR1 = 15;
const VALOR2 = 22;
const VALOR3 = 7;

// Función 1: Suma de tres valores constantes
function sumarTresValores() {
    const suma = VALOR1 + VALOR2 + VALOR3;
    mostrarResultado(`La suma de los valores constantes (${VALOR1}, ${VALOR2}, ${VALOR3}) es: ${suma}`);
    actualizarDisplay(suma);
}

// Función 2: Calcular el cuadrado de un número
function calcularCuadrado() {
    const numero = parseFloat(document.getElementById('numeroCuadrado').value);
    
    if (isNaN(numero)) {
        alert("Por favor, ingrese un número válido");
        return;
    }
    
    const cuadrado = numero * numero;
    mostrarResultado(`El cuadrado de ${numero} es: ${cuadrado}`);
    actualizarDisplay(cuadrado);
}

// Función 3: Calcular promedio de calificaciones
function calcularPromedio() {
    const nombre = document.getElementById('nombreEstudiante').value;
    const cal1 = parseFloat(document.getElementById('calificacion1').value);
    const cal2 = parseFloat(document.getElementById('calificacion2').value);
    const cal3 = parseFloat(document.getElementById('calificacion3').value);
    
    if (!nombre || isNaN(cal1) || isNaN(cal2) || isNaN(cal3)) {
        alert("Por favor, complete todos los campos correctamente");
        return;
    }
    
    const promedio = (cal1 + cal2 + cal3) / 3;
    mostrarResultado(`El promedio de ${nombre} es: ${promedio.toFixed(2)} puntos`);
    actualizarDisplay(promedio.toFixed(2));
}

// Función 4: Conversión de unidades (metros a centímetros y kilómetros)
function convertirUnidades() {
    const metros = parseFloat(document.getElementById('metros').value);
    
    if (isNaN(metros)) {
        alert("Por favor, ingrese un valor válido en metros");
        return;
    }
    
    const centimetros = metros * 100;
    const kilometros = metros / 1000;
    
    mostrarResultado(`${metros} metros equivalen a ${centimetros.toLocaleString()} centímetros y ${kilometros} kilómetros.`);
    actualizarDisplay(metros);
}

// Función 5: Comparación de dos valores
function compararValores() {
    const num1 = parseFloat(document.getElementById('numero1').value);
    const num2 = parseFloat(document.getElementById('numero2').value);
    
    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, ingrese dos números válidos");
        return;
    }
    
    if (num1 === num2) {
        alert("Los números no pueden ser iguales. Por favor, ingrese números diferentes.");
        return;
    }
    
    let mayor, menor;
    if (num1 > num2) {
        mayor = num1;
        menor = num2;
    } else {
        mayor = num2;
        menor = num1;
    }
    
    const diferencia = mayor - menor;
    mostrarResultado(`El número mayor es ${mayor}, el menor es ${menor}, y su diferencia es ${diferencia}.`);
    actualizarDisplay(mayor);
}

// Función para mostrar resultados en el panel de resultados
function mostrarResultado(mensaje) {
    const resultadosDiv = document.getElementById('resultados');
    const nuevoResultado = document.createElement('div');
    nuevoResultado.className = 'result-item';
    nuevoResultado.textContent = mensaje;
    resultadosDiv.appendChild(nuevoResultado);
    resultadosDiv.scrollTop = resultadosDiv.scrollHeight;
}

// Función para actualizar la pantalla principal
function actualizarDisplay(valor) {
    document.getElementById('display').textContent = valor;
}

// Función para limpiar las entradas
function limpiarEntradas() {
    document.getElementById('numeroCuadrado').value = '';
    document.getElementById('nombreEstudiante').value = '';
    document.getElementById('calificacion1').value = '';
    document.getElementById('calificacion2').value = '';
    document.getElementById('calificacion3').value = '';
    document.getElementById('metros').value = '';
    document.getElementById('numero1').value = '';
    document.getElementById('numero2').value = '';
    actualizarDisplay('0');
}

// Función para limpiar los resultados
function limpiarResultados() {
    document.getElementById('resultados').innerHTML = '';
    actualizarDisplay('0');
}
