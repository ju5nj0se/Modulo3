//Esto fue lo q entendi el ejercicio
function crearFiltro(min, max){
    return (num) => {
        if (num >= min && num <= max) {
            return true
        } else {
            return false
        }
    }
}

//Otra version
/*
function crearFiltro(){
    return (min, max, num) => {
        if (num >= min && num <= max) {
            return true
        } else {
            return false
    }
}
}
*/

const Filtro = crearFiltro()
console.log(Filtro(1,10,11))
