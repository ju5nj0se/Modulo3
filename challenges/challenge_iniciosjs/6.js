function aprobNote() {
    const note = prompt("Input your note")

    if (note == null){
        alert("You dont input some note")
    } else if (parseFloat(note) > 5 || parseFloat(note) < 0) {
        alert("ERROR: Input a note in the range 0 to 5")
    } else if (parseFloat(note) > 0 && parseFloat(note < 3)) {
        alert("You desaprobed")
    } else if (parseFloat(note) >= 3 && parseFloat(note) <= 4) {
        alert("You aprobed")
    } else if (parseFloat(note) == 5) {
        alert("Congratulations!! You are excellent note")
    }
}
aprobNote()
