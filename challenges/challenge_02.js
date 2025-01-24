// 1. Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". 
// De lo contrario, muestra "¡Buena semana!".
let dia = prompt('¿Qué día de la semana es?');

if (dia === 'Sábado' || dia === 'Domingo') {
    alert('¡Buen fin de semana!');
} else {
    alert('¡Buena semana!');
}

// 2. Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
let numero = prompt('Ingresa un número:');

if (numero > 0) {
    alert(`El número ${numero} es positivo.`);
} else if (numero < 0) {
    alert(`El número ${numero} es negativo.`)
} else {
    alert('Tu número es cero.')
}

// 3. Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has 
//    ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".
let puntuacion = prompt('Ingresa la puntuación:');
alert(`${puntuacion >= 100 ? '¡Felicidades, has ganado!' : 'Intentalo nuevamente para ganar.'}`)

// 4. Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el 
//    valor del saldo.
let saldo = Math.random() * 1000 + 1
alert(`El saldo actual de su cuenta es de ${saldo.toFixed(2)}`);

// 5. Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
let nombre = prompt('Ingresa tu nombre:');
alert(`¡Bienvenido de nuevo ${nombre}!`)