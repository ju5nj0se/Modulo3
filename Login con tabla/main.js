const form = document.getElementById("form");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const table = document.getElementById("table");
const name = document.getElementById("name")

const usuarios = {name: {email:"correo", pass: "contraseña"}}

function printUsersTable(datos) {
    const column = document.createElement("tr");
    id = 0

    
    table.appendChild(column)
    for (let item of datos) {
        const cell = document.createElement("td");
        cell.textContent = item;
        column.appendChild(cell)
    }
}


form.addEventListener("submit", (e)=> {
    e.preventDefault()
    
    usuarios[name.value] = {email: email.value, pass: pass.value}
    printUsersTable([name.value, email.value, pass.value, "otra accion"])

    form.reset()
})



