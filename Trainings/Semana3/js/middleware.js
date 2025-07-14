const user = document.getElementById('user')
const pass = document.getElementById('pass')
const btnLogin = document.getElementById("login")

btnLogin.addEventListener("click", () => {
    if (user.value == "juan" && pass.value == "juan123") {
        window.location.assign("./index.html")
        sessionStorage.setItem("session",  "true")
    } else {
        alert("incorrecto")
    }
})

if (sessionStorage.getItem("session")) {
    window.location.assign("index.html")
}
