// Lista para almacenar los nombres
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, escribe un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Ese nombre ya fue agregado.");
        return;
    }

    amigos.push(nombre);
    mostrarLista();
    input.value = "";
}

// Función para mostrar los nombres en la lista
function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debes agregar al menos dos nombres para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let resultado = document.getElementById("resultado");

    resultado.innerHTML = `<li> Tu amigo secreto es: <strong>${amigos[indiceAleatorio]}</strong></li>`;
}
