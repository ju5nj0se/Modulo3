let vidaX = 5;
let miembrosX = 3;
let mochilaX = [];
let opt;
let vida = document.getElementById("vida");
let miembros = document.getElementById("miembros").textContent = 3;
let mochila = document.getElementById("mochila");

let resultado = document.getElementById("resultado")

function validarOpcion(opt) {
    if (opt == "a" || opt == "b") {
        return false
    } else {
        return true
    }
}

function mostrarMochila(mochilaX) {
    mochilaX.push("comida", "agua")

    for (let i = 0; i < mochilaX.length; i++) {
        const element = document.createElement("li")
        element.textContent = mochilaX[i];
        mochila.appendChild(element)
    }
}


let flag = true
//Buscar comida
do {
    opt = prompt("Buscar comida\n\nEl hambre aprieta y la sed comienza a nublar el juicio del grupo. Es momento de actuar con rapidez, pero también con cautela. ¿Dónde buscar recursos vitales? \n \nOpción A: Ir al supermercado abandonado \nOpción B: Robar mochila a un sobreviviente");
    if (validarOpcion(opt)) {
        alert("Escoge una opcion valida!!")

    } else {
        flag = false
    }
} while (flag);

switch (opt) {
    case "a":
        vida.innerHTML = (vidaX = vidaX -1);
        mostrarMochila(["comida", "agua"])

        resultado.innerHTML = "Encuentro leve con saqueador -1 vida. <br>Encontraste comida y agua";
        break;

    case "b":

        break;
    
    default:
        break;
}


