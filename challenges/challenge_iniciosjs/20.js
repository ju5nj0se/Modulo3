let notes = []
let risk = 0
let sumNotes = 0
for (let i = 0; i < 5; i++) {
    notes[i] = prompt(`Input the note ${i+1}`)
    parseFloat(notes[i])

    if (notes[i] < 3) {
        alert("You are in risk")
        risk ++
    }

    sumNotes = parseFloat(sumNotes) + parseFloat(notes[i])
}

notes.sort((a, b) => a - b)
alert(`General average ${sumNotes/5}\nThe students in risk are ${risk}\nThe mayor notes is ${notes[notes.length - 1]}\nThe minor note is ${notes[0]}`)