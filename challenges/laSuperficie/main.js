let vida = 5;
let miembros = 3;
const mochila = [];
let opt;
let flag = true;

function imprimirEstadisticas(vida, miembros, mochila) {
    alert(`Estadisticas:\n -Vida: ${vida}\n- Miembros ${miembros}\n- Mochila: ${mochila.join(" - ")}`);

    if (vida == 0) {
        alert("GAME OVER")
        window.location.reload()
    }
}

function validarOpt(opt) {
    if (opt == "a" || opt == "b" || opt == "c" || opt == "d") {
        return false
    } else {
        alert("Elige una opcion correcta")
        return true
    }
}

alert("Has logrado sobrevivir al impacto inicial del apagón global. La ciudad es un caos. El grupo tiene pocas provisiones, sin saber qué ocurrió realmente. Todo indica que si no logran encontrar suministros, se convertirán en una estadística más. Hay rumores de una salida segura a través del sistema subterráneo de metro. Pero antes, debes resistir en la superficie el tiempo suficiente para prepararte...")


//BUSCAR COMIDA
do {
    
    opt = prompt("Buscar comida \n\nEl hambre aprieta y la sed comienza a nublar el juicio del grupo. Es momento de actuar con rapidez, pero también con cautela. ¿Dónde buscar recursos vitales?\nOpción A: Ir al supermercado abandonado\nOpción B: Robar mochila a un sobreviviente")

    flag = validarOpt(opt)

} while (flag);

switch (opt) {
    case "a":
        alert("Encuentras comida y agua pero tienes un encuentro con un saqueador -1 vida");
        vida -= 1;
        mochila.push("comida", "agua");
        imprimirEstadisticas(vida, miembros, mochila);
        break;

    case "b":
        alert("Obtienes una linterna pero pierdes a un 1 miembro por represalias");
        miembros -= 1;
        mochila.push("linterna");
        imprimirEstadisticas(vida, miembros, mochila);
        break;
}


//LUGAR DE REFUGIO
flag = true
do {
    opt = prompt("Lugar de refugio\n\nCon algo de alimento en la mochila, el grupo necesita un lugar seguro donde recuperarse y planear el siguiente movimiento. La ciudad no perdona a quienes se quedan mucho tiempo al descubierto.\nOpción A: Esconderse en una farmacia \nOpción B: Ir a una estación de buses\nOpción C: Refugiarse en una tienda de campaña abandonada")

    flag = validarOpt(opt)
} while (flag);

switch (opt) {
    case "a":
        alert("Encuenrtran un botiquin y descansan");
        mochila.push("botiquin");
        vida += 1;
        imprimirEstadisticas(vida, miembros, mochila);
        break;

    case "b":
        alert("Hay escombros y te lastimas -1 vida");
        vida -= 1
        imprimirEstadisticas(vida, miembros, mochila);
        break;

    case "c":
        alert("Encuentran una bateria portatil, pero hay signos de radioactividad cerca -1vida");
        vida -= 1;
        mochila.push("bateria portatil");
        imprimirEstadisticas(vida, miembros, mochila)
        break;
}


//AYUDAR O IGNORAR
flag = true;
do {
    opt = prompt("Ayudar o ignorar\n\nMientras avanzan, escuchan gritos de auxilio desde un callejón. Ayudar podría ser un acto heroico... o un riesgo innecesario. ¿Cuál será su decisión?\nOpción A: Ayudar a una familia atrapada\nOpción B: Ignorar y seguir avanzando\nOpción C: Distraer a los enemigos y liberar a la familia a distancia\nOpción D: Robar los recursos de la familia sin ser vistos");

    flag = validarOpt(opt);
} while (flag);

switch (opt) {
    case "a":
        alert("Ganan un miembro agradecidos con recursos. +1 miembro, +1 mapa");
        miembros += 1;
        mochila.push("mapa");
        imprimirEstadisticas(vida, miembros, mochila);
        break;

    case "b":
        alert("No ganan nada -1 miembro");
        miembros -= 1;
        imprimirEstadisticas(vida, miembros, mochila);
        break;
    
    case "c":
        alert("Obtienen una linterna pero pierdes una vida");
        mochila.push("linterna");
        vida -= 1;
        imprimirEstadisticas(vida, miembros, mochila);
        break;
    
    case "d":
        alert("Obtienen comida pero pierden a 2 miembros por represalias");
        mochila.push("comida");
        miembros -= 2;
        imprimirEstadisticas(vida, miembros, mochila);
        break;
}

//SEÑAL DE HUMO
flag = true;
do {
    opt = prompt("Señal de humo \n\nDesde lo alto de un edificio, una columna de humo se eleva a lo lejos. ¿Es una señal de auxilio o una trampa mortal? La decisión podría marcar la diferencia.\nOpción A: Investigar la señal\nOpción B: Evitar la zona")

    flag = validarOpt(opt)
} while (flag);

switch (opt) {
    case "a":
        alert("Encuentran gasolina y una llave vieja")
        mochila.push("gasolina", "llave")
        imprimirEstadisticas(vida, miembros, mochila)
        break;
    
    case "b":
        alert("Evitan una posible emboscada, pero pierden oportunidad de obtener objetos.");
        imprimirEstadisticas(vida, miembros, mochila)
        break;
}

//EXPLORACION ALTA O BAJA
flag = true
do {
    opt = prompt("Exploración alta o baja\n\nEl grupo necesita información. Las rutas están colapsadas, y moverse sin saber puede ser letal. ¿Mejor buscar una vista panorámica o seguir entre las sombras? \nOpción A: Subir a un edificio a observar\nOpción B: Moverse por callejones\nOpción C: Usar una alcantarilla conectada al metro")

    flag = validarOpt(opt)
} while (flag);


switch (opt) {
    case "a":
        alert("Encuentran un dron con informacion");
        mochila.push("intel")
        imprimirEstadisticas(vida, miembros, mochila)
        break;

    case "b":
        alert("Se enfrentan a animales salvajes")
        vida -= 1;
        imprimirEstadisticas(vida, miembros, mochila)
        break;

    case "c":
        alert("Llegan cerca de una entrada secreta al siguiente nivel y encuentran una tarjeta de acceso");
        mochila.push("tarjeta de acceso");
        imprimirEstadisticas(vida, miembros, mochila)
        break;
}

//MEDIO DE TRANSPORTE
flag = true;
do {
    opt = prompt("Medio de transporte\n\nLa noche se acerca. Para avanzar rápido deben decidir: improvisar un medio de transporte o confiar en sus propias fuerzas. El tiempo es limitado.\nOpción A: Reparar una bicicleta\nOpción B: Ir a pie")

    flag = validarOpt(opt)
} while (flag);

switch (opt) {
    case "a":
        alert("Avanzan rápido, encuentran mochila con recursos.")
        mochila.push("medicinas", "bateria");
        imprimirEstadisticas(vida, miembros, mochila)
        break;

    case "b":
        alert("Caminan mucho, cansancio general.")
        vida -= 1;
        imprimirEstadisticas(vida, miembros, mochila)
        break;
    default:
        break;
}

alert("A pesar de los riesgos, tu grupo ha logrado reunir recursos vitales. En medio del silencio de la ciudad, encuentran una compuerta metálica marcada con un símbolo de evacuación. El mapa encontrado coincide con un acceso a los túneles del metro. La verdadera prueba está por comenzar bajo tierra, donde la oscuridad y los restos del colapso pondrán a prueba su determinación.")

if (vida >= 3) {
    if (mochila.length >= 3) {
        if (mochila.includes("mapa")) {
            alert("WIN\n Haz logrado pasar a la compuerta metalica")
        } else {
            alert("GAME OVER \n No tienes el mapa")
        }
    } else {
        alert("GAME OVER\n Necesitaas tener mas de 3 objetos en tu mochila")
    }
} else {
    alert("GAME OVER\n Necesitas tener mas de 3 vidas")
}