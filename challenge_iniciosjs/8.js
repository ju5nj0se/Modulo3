function enterTournament() {
    const age = prompt("Input your age")
    const country = prompt("Input your conuntry born")

    if(isNaN(age)) {
        alert("Err. Input valid age")
    } else if (parseFloat(age) < 15 || parseInt(age) > 35) {
        console.warn("Sorry, you dont enter to the tournament because you age")
    } else if (country != "Colombia") {
        console.warn("Sorry you dont resident of Colombia")
    } else {
        console.log("You can enter to the tournament")
    }
}

enterTournament()