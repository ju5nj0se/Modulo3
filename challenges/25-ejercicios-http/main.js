const container = document.querySelector(".container");
const url = "http://localhost:3000";
const response = document.getElementById("response")

for (let index = 1; index < 26; index++) {
    const btn = document.createElement("button")
    btn.textContent = "Peticion" + index
    btn.setAttribute("id", "btn" + index)
    container.appendChild(btn)
}

document.getElementById("btn1").addEventListener("click", (e) => {
    e.preventDefault();

    fetch(url + "/users")

        .then(res => res.json())
        .then(data => {
            console.log(data);


        })
})

document.getElementById("btn2").addEventListener("click", (e) => {
    e.preventDefault()

    fetch(url + '/users/1')

        .then(response => response.json())

        .then(data => {
            console.log(data);

        })
})

document.getElementById("btn3").addEventListener("click", (e) => {
    e.preventDefault();

    fetch(url + "/users?name=Ana López")

        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
})

document.getElementById("btn4").addEventListener("click", e => {
    e.preventDefault()

    fetch(url + "/users?q=gmail")

        .then(response => response.json())

        .then(data => console.log(data))
})

document.getElementById("btn5").addEventListener("click", e => {
    e.preventDefault()

    fetch(url + "/tasks/101")

        .then(response => response.json())

        .then(data => console.log(data))

})

document.getElementById("btn6").addEventListener("click", e => {
    e.preventDefault()

    fetch(url + "/tasks?estado=pendiente")

        .then(response => response.json())

        .then(data => console.log(data))
})

document.getElementById("btn7").addEventListener("click", e => {
    e.preventDefault()

    fetch(url + "/tasks?prioridad=alta&_sort=fechaEntrega&_order=asc")

        .then(response => response.json())

        .then(data => console.log(data))
})

document.getElementById("btn8").addEventListener("click", e => {
    e.preventDefault()

    fetch(url + "/users?_limit=3")

        .then(response => response.json())

        .then(data => console.log(data))
})

document.getElementById("btn9").addEventListener("click", e => {
    e.preventDefault()

    fetch(url + "/tasks?_page=2&_limit=5")

        .then(response => response.json())

        .then(data => console.log(data))
})

document.getElementById("btn10").addEventListener("click", e => {
    e.preventDefault()

    fetch(url + "/tasks?title_like=Diseñar")

        .then(response => response.json())

        .then(data => console.log(data))
})

document.getElementById("btn11").addEventListener("click", e => {
    e.preventDefault()

    fetch(url + "/users?role_ne=admin")

        .then(response => response.json())

        .then(data => console.log(data))
})

document.getElementById("btn12").addEventListener("click", e => {
    e.preventDefault()

    fetch(url + "/tasks?prioridad_ne=baja")

        .then(response => response.json())

        .then(data => console.log(data))
})

document.getElementById("btn13").addEventListener("click", e => {
    e.preventDefault()

    fetch(url + "/users/age_gt=30")

        .then(response => response.json())

        .then(data => console.log(data))
})

document.getElementById("btn14").addEventListener("click", e => {
    e.preventDefault()

    fetch(url + "/users/age_lte=25")

        .then(response => response.json())

        .then(data => console.log(data))
})

document.getElementById("btn15").addEventListener("click", e => {
    e.preventDefault()

    fetch(url + "/tasks?fechaEntrega_gt=2024-06-10")

        .then(response => response.json())

        .then(data => console.log(data))
})

//POST--------------------------------------
document.getElementById("btn16").addEventListener("click", e => {
    e.preventDefault()

    fetch(url + "/users", {
        method: "POST",
        headers: {
            ContentType: "application/json"
        },
        body: JSON.stringify({
            name: "Nuevo usuario",
            email: "nuevo@gmail.com",
            role: "user",
            activo: false,
            age: 28,
            telefono: "1234567890"
        })
    })

    alert("usuario creado")
})

document.getElementById('btn17').addEventListener('click', (e) => {
    e.preventDefault()

    const nuevaTarea = {
        usuarioId: 3, // Asignado al usuario con ID 3
        titulo: "Preparar presentación del proyecto",
        descripcion: "Crear diapositivas y guion para la reunión semanal.",
        estado: "pendiente",
        prioridad: "alta",
        fechaEntrega: "2025-07-15", // Ejemplo de fecha
        completed: false
    };


    fetchData(url + "/tasks", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevaTarea)
    });
    console.log('Tarea creada para usuario 3:', data);
    alert('Tarea creada exitosamente para usuario 3!');

});

//PUT---------------------------------------
document.getElementById("btn18").addEventListener("click", e => {
    e.preventDefault()

    fetch(url + "/users/2", {
        method: "POST",
        headers: {
            ContentType: "application/json"
        },
        body: JSON.stringify({
            "id": 104,
            "userId": 3,
            "title": "Hacer otra cosa",
            "description": "Hacer de todo menos trabajar :).",
            "estado": "pendiente",
            "prioridad": "baja",
            "fechaEntrega": "2025-07-20",
            "completed": false
        })
    })

    alert("Tarea actualizada")
})

document.getElementById("btn19").addEventListener("click", e => {
    e.preventDefault()

    fetch(url + "/taks/101", {
        method: "POST",
        headers: {
            ContentType: "application/json"
        },
        body: JSON.stringify({
            id: 1, // El ID de la tarea a actualizar
            usuarioId: 5, // Cambiando la asignación al usuario 5 (ejemplo)
            titulo: "Actualizar sitio web principal",
            descripcion: "Revisar y actualizar el contenido de la página de inicio y contacto.",
            estado: "completado", // Nuevo estado
            prioridad: "media",
            fechaEntrega: "2025-07-10",
            completed: true
        })
    })

    alert("Tarea reemplazada")
})

//PATCH
document.getElementById('btn20').addEventListener('click', (e) => {
    e.preventDefault()

    fetch(`${url}/users/4`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ activo: false })
    });

});

document.getElementById('btn21').addEventListener('click', (e) => {
    e.preventDefault()

    fetch(`${url}/tasks?id=2`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ estado: "completado" })
    });
});

document.getElementById('btn22').addEventListener('click', (e) => {
    e.preventDefault()

    fetch(`${url}/users?id=5`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ telefono: "0987654321" })
    });
});

document.getElementById('btn23').addEventListener('click', (e) => {
    e.preventDefault()

    fetch(`${url}/tasks/103`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ prioridad: "media" })
    });
});

document.getElementById('btn24').addEventListener('click', (e) => {
    e.preventDefault()

    fetch(`${url}/users/6`, {
            method: 'DELETE'
    });
});

document.getElementById('btn25').addEventListener('click', (e) => {
    e.preventDefault()

    fetch(`${url}/tasks/103`, {
            method: 'DELETE'
    });
});