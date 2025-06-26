function base() {
    let bool = true
    
    return () => {
        if (bool) {
            //Bloque de codigo
            console.log("Bloque de codigo privado")
            bool=false
        }
    }
}

//Nose si sea la mejor manera pero es vaina da
const hijo = base()

hijo()
hijo()