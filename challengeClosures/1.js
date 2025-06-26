function crearContador() {
    count = 0
    return () => {
        count++
        return count
    }
}

let otroContador = crearContador()

console.log(otroContador())
console.log(otroContador())
