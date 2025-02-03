// List of registered friends
let amigos = []

function agregarAmigo () {
    let texto = document.getElementById('amigo').value;

    // Make sure the textbox isn't empty
    if (!validarEntrada(texto)) {
        alert('Por favor inserte un nombre.');
        return;
    }

    // Add new friend to the list and HTML
    amigos.push(texto);
    actualizarLista(amigos);
    limpiarCaja();
}

function sortearAmigo () {
    // Make sure there's at least one friend in the list
    if (amigos.length === 0) {
        alert('Debes añadir al menos un elemento a la lista.')
        return;
    }

    // Get a random friend and display it on the HTML site
    numeroAleatorio = generarNumeroAleatorio();
    amigoSecreto = amigos[numeroAleatorio];
    console.log(numeroAleatorio, amigoSecreto);
    document.getElementById('resultado').innerHTML = `<li>${amigoSecreto}</li>`;
}

function generarNumeroAleatorio() {
    // Get a random number between 0 and amigos.lenght
    return Math.floor(Math.random()*amigos.length);
}

function actualizarLista (amigos) {
    // Clear current list to avoid duplicates
    limpiarLista();
    lista = document.getElementById('listaAmigos');

    // Iterate over the friends list and show each element into a HTML list
    for (i = 0; i < amigos.length; i++) {
        let registro = document.createElement('li');
        registro.textContent = amigos[i];
        lista.appendChild(registro);
    }
}

function validarEntrada (texto) {
    // Make sure the textbox isn't empty
    if (texto == null || texto == "") {
        return false;
    }
    return true;
}

function limpiarCaja () {
    // Clear textbox
    document.getElementById('amigo').value = '';
}

function limpiarLista () {
    // Clear HTML friends list
    document.getElementById('listaAmigos').innerHTML = '';
}