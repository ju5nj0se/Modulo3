function base() {
    array = []
    return {
        agregar: (x) => {
            array.push(x)
        },

        verLista: () => {
            console.log(array.join(", "))
        }
    }
}

let listaPrivada = base()

listaPrivada.agregar(3)
listaPrivada.verLista()