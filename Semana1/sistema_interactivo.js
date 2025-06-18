function SendMessage() {
    //use const because the name don't change
    const name = prompt("Input your name")
    let age = prompt("Input your age")
    age = parseInt(age)

    //Conditionals for validations in the inputs
    if (name == null || name == "") {
        alert("I dont know who are you, but continue writing code")
    } else if (isNaN(age)) {
        //IMPORTANT!! The error to print in console
        console.error("Error: Input a valid age")
    }
    
    //Conditional for alerts in cases to ages
    if (age >= 18) {
        alert(`Hello ${name}, continue exploring in the world of the develoment, find chamba!!`)

    } else if (age < 18) {
        alert(`Wow ${name} you are more youngest, continue learning`)  

    } 
}

SendMessage()

