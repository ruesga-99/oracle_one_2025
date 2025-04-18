let limiteSuperior = parseInt(prompt("Ingresa el límite superior: "));
let limiteIntentos = parseInt(prompt("Ingresa el número de intentos: "));
alert(`El número secreto se encuentra entre 1 y ${limiteSuperior}.
       \nTienes máximo ${limiteIntentos} ${limiteIntentos == 1 ? 'intento' : 'intentos'}.`)

let numeroSecreto = Math.floor(Math.random() * limiteSuperior) + 1;
let numeroUsuario; 
let intentos = 1;

console.log(numeroSecreto);

while (numeroSecreto != numeroUsuario) {
    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${limiteSuperior} por favor:`));

    if (numeroSecreto === numeroUsuario) {
        alert(`Acertaste, el número secreto es: ${numeroUsuario}. Te tomó ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}.`);
        break;
    }

    if(numeroSecreto < numeroUsuario) {
        alert('El número secreto es menor');
    } else if (numeroSecreto > numeroUsuario) {
        alert('El número secreto es mayor');
    }
    intentos ++;

    if (intentos > limiteIntentos) {
        alert(`Alcanzaste el número máximo de ${limiteIntentos} intentos.`);
        break;
    }
} 