// Variables globales
let currentExpression = '';
let history = [];

// Función que se ejecuta automáticamente al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    console.log('Calculadora científica universal cargada correctamente');
    console.log('Desarrollado por: [Tu Nombre]');
    console.log('Materia: Programación WEB III (2229)');
    console.log('Ing. Alonso González');
    
    // Mostrar mensaje de bienvenida en los resultados
    const resultadosDiv = document.getElementById('resultados');
    const bienvenida = document.createElement('div');
    bienvenida.className = 'result-item';
    bienvenida.innerHTML = `
        <div class="operation-title">¡Calculadora Científica Universal!</div>
        <div class="input-data">Escribe una expresión matemática o usa los botones</div>
        <div class="result-data">Ejemplos: 2+3*4, sin(45), sqrt(16), 2**3</div>
    `;
    resultadosDiv.appendChild(bienvenida);
    
    // Enfocar el campo de entrada
    document.getElementById('expressionInput').focus();
});

// Función para agregar texto al display
function addToDisplay(value) {
    const display = document.getElementById('display');
    const expressionInput = document.getElementById('expressionInput');
    
    if (display.textContent === '0' || display.textContent === 'Error') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
    
    // También agregar al campo de entrada
    expressionInput.value += value;
    currentExpression = expressionInput.value;
}

// Función para limpiar el display
function clearDisplay() {
    document.getElementById('display').textContent = '0';
    document.getElementById('expressionInput').value = '';
    currentExpression = '';
}

// Función para limpiar todo
function clearAll() {
    clearDisplay();
    document.getElementById('resultados').innerHTML = '';
    
    // Agregar mensaje de bienvenida nuevamente
    const resultadosDiv = document.getElementById('resultados');
    const bienvenida = document.createElement('div');
    bienvenida.className = 'result-item';
    bienvenida.innerHTML = `
        <div class="operation-title">¡Calculadora Científica Universal!</div>
        <div class="input-data">Escribe una expresión matemática o usa los botones</div>
        <div class="result-data">Ejemplos: 2+3*4, sin(45), sqrt(16), 2**3</div>
    `;
    resultadosDiv.appendChild(bienvenida);
}

// Función para eliminar el último carácter
function backspace() {
    const display = document.getElementById('display');
    const expressionInput = document.getElementById('expressionInput');
    
    if (display.textContent.length > 1) {
        display.textContent = display.textContent.slice(0, -1);
    } else {
        display.textContent = '0';
    }
    
    expressionInput.value = expressionInput.value.slice(0, -1);
    currentExpression = expressionInput.value;
}

// Función para calcular el resultado
function calculateResult() {
    try {
        const expression = document.getElementById('expressionInput').value || document.getElementById('display').textContent;
        
        if (!expression) {
            throw new Error('Expresión vacía');
        }
        
        // Reemplazar símbolos matemáticos por funciones JavaScript
        let processedExpression = expression
            .replace(/π/g, 'Math.PI')
            .replace(/e/g, 'Math.E')
            .replace(/sin\(/g, 'Math.sin(')
            .replace(/cos\(/g, 'Math.cos(')
            .replace(/tan\(/g, 'Math.tan(')
            .replace(/ln\(/g, 'Math.log(')
            .replace(/log\(/g, 'Math.log10(')
            .replace(/sqrt\(/g, 'Math.sqrt(')
            .replace(/abs\(/g, 'Math.abs(')
            .replace(/pow\(/g, 'Math.pow(')
            .replace(/exp\(/g, 'Math.exp(')
            .replace(/floor\(/g, 'Math.floor(')
            .replace(/ceil\(/g, 'Math.ceil(')
            .replace(/round\(/g, 'Math.round(')
            .replace(/\^/g, '**')
            .replace(/x\^y/g, '**')
            .replace(/x²/g, '**2')
            .replace(/√x/g, '**0.5');
        
        // Manejar factorial (!)
        processedExpression = processedExpression.replace(/(\d+)!/g, 'factorial($1)');
        
        // Evaluar la expresión de forma segura
        const result = safeEval(processedExpression);
        
        // Actualizar display
        document.getElementById('display').textContent = result;
        
        // Agregar al historial
        addToHistory(expression, result);
        
    } catch (error) {
        document.getElementById('display').textContent = 'Error';
        console.error('Error en el cálculo:', error);
        
        // Agregar error al historial
        const resultadosDiv = document.getElementById('resultados');
        const errorItem = document.createElement('div');
        errorItem.className = 'result-item';
        errorItem.innerHTML = `
            <div class="operation-title">ERROR EN CÁLCULO</div>
            <div class="input-data">Expresión: ${currentExpression || document.getElementById('display').textContent}</div>
            <div class="result-data" style="color: #e74c3c;">Error: ${error.message}</div>
        `;
        resultadosDiv.appendChild(errorItem);
        resultadosDiv.scrollTop = resultadosDiv.scrollHeight;
    }
}

// Función para cálculo manual desde el campo de entrada
function calculateManual() {
    const expressionInput = document.getElementById('expressionInput');
    currentExpression = expressionInput.value;
    calculateResult();
}

// Función para evaluación segura de expresiones
function safeEval(expression) {
    // Usar Function constructor en lugar de eval para mayor seguridad
    try {
        return Function('"use strict"; return (' + expression + ')')();
    } catch (error) {
        throw new Error('Expresión inválida: ' + error.message);
    }
}

// Función factorial (para manejar el operador !)
function factorial(n) {
    if (n < 0) throw new Error('Factorial de número negativo');
    if (n === 0 || n === 1) return 1;
    
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Función para agregar al historial
function addToHistory(expression, result) {
    const resultadosDiv = document.getElementById('resultados');
    const historyItem = document.createElement('div');
    historyItem.className = 'result-item';
    historyItem.innerHTML = `
        <div class="operation-title">CÁLCULO REALIZADO</div>
        <div class="input-data">Expresión: ${expression}</div>
        <div class="result-data">Resultado: ${result}</div>
    `;
    resultadosDiv.appendChild(historyItem);
    resultadosDiv.scrollTop = resultadosDiv.scrollHeight;
    
    // Guardar en el array de historial
    history.push({ expression, result, timestamp: new Date() });
}

// Función para manejar tecla Enter
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        calculateManual();
    }
}

// Event listeners para teclado físico
document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    // Números
    if (key >= '0' && key <= '9') {
        addToDisplay(key);
    }
    // Operadores básicos
    else if (['+', '-', '*', '/', '.', '(', ')'].includes(key)) {
        addToDisplay(key);
    }
    // Enter para calcular
    else if (key === 'Enter') {
        calculateResult();
    }
    // Escape para limpiar
    else if (key === 'Escape') {
        clearAll();
    }
    // Backspace para borrar
    else if (key === 'Backspace') {
        backspace();
        event.preventDefault();
    }
});

// Función para mostrar ejemplos rápidos
function showExample(example) {
    document.getElementById('expressionInput').value = example;
    currentExpression = example;
    document.getElementById('display').textContent = example;
} 
