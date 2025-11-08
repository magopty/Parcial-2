// Variables para los valores constantes de la suma
const VALOR1 = 15;
const VALOR2 = 22;
const VALOR3 = 7;

// Función 1: Suma de tres valores constantes
function sumarTresValores() {
    const suma = VALOR1 + VALOR2 + VALOR3;
    const mensaje = `La suma de los valores constantes (${VALOR1}, ${VALOR2}, ${VALOR3}) es: ${suma}`;
    mostrarResultado('Suma de Tres Valores', `Valores constantes: ${VALOR1}, ${VALOR2}, ${VALOR3}`, mensaje);
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
    const mensaje = `El cuadrado de ${numero} es: ${cuadrado}`;
    mostrarResultado('Cuadrado de un Número', `Número ingresado: ${numero}`, mensaje);
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
    const mensaje = `El promedio de ${nombre} es: ${promedio.toFixed(2)} puntos`;
    const datosEntrada = `Estudiante: ${nombre} | Calificaciones: ${cal1}, ${cal2}, ${cal3}`;
    mostrarResultado('Promedio de Calificaciones', datosEntrada, mensaje);
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
    const mensaje = `${metros} metros equivalen a ${centimetros.toLocaleString()} centímetros y ${kilometros} kilómetros.`;
    mostrarResultado('Conversión de Unidades', `Metros ingresados: ${metros}`, mensaje);
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
    const mensaje = `El número mayor es ${mayor}, el menor es ${menor}, y su diferencia es ${diferencia}.`;
    const datosEntrada = `Números comparados: ${num1} y ${num2}`;
    mostrarResultado('Comparación de Valores', datosEntrada, mensaje);
    actualizarDisplay(mayor);
}

// Función para mostrar resultados en el panel de resultados
function mostrarResultado(operacion, datos, resultado) {
    const resultadosDiv = document.getElementById('resultados');
    const nuevoResultado = document.createElement('div');
    nuevoResultado.className = 'result-item';
    nuevoResultado.innerHTML = `
        <div class="operation-title">${operacion}</div>
        <div class="input-data">Datos: ${datos}</div>
        <div class="result-data">Resultado: ${resultado}</div>
    `;
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
    actualizarDatosEntrada();
}

// Función para limpiar los resultados
function limpiarResultados() {
    document.getElementById('resultados').innerHTML = '';
    actualizarDisplay('0');
    
    // Agregar mensaje de bienvenida nuevamente
    const resultadosDiv = document.getElementById('resultados');
    const bienvenida = document.createElement('div');
    bienvenida.className = 'result-item';
    bienvenida.innerHTML = '<div class="operation-title">¡Bienvenido a la Calculadora Científica!</div><div class="input-data">Seleccione una función y complete los datos requeridos</div>';
    resultadosDiv.appendChild(bienvenida);
}
