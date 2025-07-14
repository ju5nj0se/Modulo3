//Login---------------------------------------------------------------
//Vars of DOM
const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password")
const messsage = document.getElementById("message");

const users = { 
    0: {
        userEmail: "admin@admin.com",
        userPassword: "admin123"
    },

    1: {
        userName: "Sofia",
        userLastName: "Lopera",
        userEmail: "admin@admin.com",
        userPassword: "admin123",
        rol: "admin",
        userNumber: "3212321231",
        userCountry: "Colombia",
        userCity: "Medellín",
        userAddress: "Crra 65B #117-19",
        userPostcode: "0005552"
    }

}

//Validate login
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const list = Object.keys(users)

  
}
);
//END Login--------------------------------------

//Validate if there is session
function ValidateSession() {
    if(!sessionStorage.getItem("user")) {
        window.location.assign("../index.html")
    }
}

export {
    registerUser,
    users,
    userID,
    ValidateSession
}
