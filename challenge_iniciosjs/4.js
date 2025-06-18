function enterDisco() {

    const age = prompt("How years old have you?")

    if (parseInt(age) >= 18) {
        alert("You can enter to the dico!")
    }
    else {
        alert("You can't enter to disco!")
    }
}

enterDisco()
