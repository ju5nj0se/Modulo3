const form = document.getElementById("form");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const table = document.getElementById("table");
const name = document.getElementById("name")

const usuarios = {}
id = 0


function tableDOM(datos) {
    //Lo unico que hace esto llevarse los datos al DOM
    const column = document.createElement("tr");
    column.setAttribute("id", id);
    table.appendChild(column);
    for (let item of datos) {
        const cell = document.createElement("td");
        cell.textContent = item;
        column.appendChild(cell);
    }
    
    const eliminar = document.createElement("button");
    eliminar.textContent = "Eliminar"
    eliminar.setAttribute("id", id)
    const cell = document.createElement("td")
    column.appendChild(cell)
    cell.appendChild(eliminar)
    
    eliminar.addEventListener("click", () => {
        const idDel = eliminar.getAttribute("id");
        delete usuarios[idDel];
        column.remove()
    })
}


//Recoger la funcion retornada
form.addEventListener("submit", (e) => {
    e.preventDefault()

    usuarios[id.toString()] = { nombre: name.value, email: email.value, pass: pass.value }
    tableDOM([name.value, email.value, pass.value])
    form.reset()
    id += 1
})




