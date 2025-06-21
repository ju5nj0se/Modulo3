let user, password
let cont = 0;
cont = parseInt(cont)

flag = true
while (flag) {
    user = prompt("Input your user"), password = prompt("Input your password");
    if (user = "juan jose" && password == "juan123") {
        alert("Acces...");
        flag = false;
    } else if (user == "admin" && password == "1234567890") {
        alert("Acess...");
        flag = false;
    } else {
        alert("Incorrect password or user") //JEJEJE
        cont++
        if (cont == 3) {
            console.error("page blocked")
            flag = false
        }
    }
}   