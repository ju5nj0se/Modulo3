import { users } from "./main.js";

const name = document.getElementById("name");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const cellphone = document.getElementById("cellphone");
const password = document.getElementById("password");
const country = document.getElementById("country");
const city = document.getElementById("city");
const addres = document.getElementById("addres");
const postalCode = document.getElementById("postalCode");
const form = document.getElementById("form");

function Message(bool) {
    if (bool) {

        Swal.fire({
            title: "Error",
            text: "Ya existe un usuario con esas credenciales,\nPruebe e inicie sesión",
            icon: "error",
            confirmButtonText: "Iniciar sesion"
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = '../index.html'
            }
        })

    } else {

        Swal.fire({
            title: "Usuario registrado con exito",
            icon: "success",
            confirmButtonText: "Iniciar sesion"
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = '../index.html'
            }
        })

    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let dataUser = JSON.parse(localStorage.getItem('user'));

    if (dataUser) {
        
        if (dataUser.userEmail == email.value) {

            Message(true);

        } else {
            const info = [Math.max(...Object.keys(users).map(Number)) + 1, name.value, lastName.value, email.value, password.value, cellphone.value, country.value, city.value, addres.value, postalCode.value, "user"];

            registerUser(info);

            localStorage.setItem('user', JSON.stringify({
                userEmail: email.value
            }));

            Message(false);
        }

    } else {
        const info = [Math.max(...Object.keys(users).map(Number)) + 1, name.value, lastName.value, email.value, password.value, cellphone.value, country.value, city.value, addres.value, postalCode.value, "user"];

        registerUser(info);

        localStorage.setItem('user', JSON.stringify({
            userEmail: email.value
        }));

        Message(false);
    }
})

//Function for register user
function registerUser(info) {
    users[info[0]] = { userName: info[1], UserLastName: info[2], userEmail: info[3], userPassword: info[4], userNumber: info[5], userCountry: info[6], userCity: info[7], userAddres: info[8], userPostcode: info[9], role: info[10] }
}




