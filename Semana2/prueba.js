function base() {
    array = []
    return {
        agregar: (i, o)=> {
            array.push(i)
            array.push(o)
            console.log(array)
        },

        mostrar: () => {
            console.log(array)
        }
    }
}

const basex2 = base()

basex2.agregar(5, 4)