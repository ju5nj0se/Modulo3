const users = ["pedro", "mar", "samuel", "maria", "ja"];
let cont = 0

users.forEach((element) => {
    if (element.length > 3 ) {
        cont++
    } else {
        console.error("err")
    }
})

console.log(`${cont} user can entry`)

