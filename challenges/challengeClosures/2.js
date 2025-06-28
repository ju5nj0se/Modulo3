function base(base) {
    return (x) => {
        return base * x
    }
}

let multiplicar = base(4)

console.log(multiplicar(4))