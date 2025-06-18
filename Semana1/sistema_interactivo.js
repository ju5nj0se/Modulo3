function SendMessage() {
    //use const because the name don't change
    const nombre = prompt("Input your name")
    const age = prompt("Inuput your age")
    age = parseInt(age)

    //Conditionals for validations in the inputs
    if (nombre == null || nombre == "") {
        alert("I dont know who are you, but continue writing code")
    } else if (isNaN(age)) {
        console.error("Error: Input a valid age")
    }
    
    //Conditional for alerts in cases to ages
    if (age >= 18) {
        alert(`Hello ${nombre}, continue exploring in the world of the develoment, find chamba!!`)

    } else if (age < 18) {
        alert(`Wow ${nombre} you are more youngest, continue learn`)  

    } 
}

SendMessage()

