let i  = 3;
for (i; i > 0; i--) {
    let user = prompt("Input your user");
    let pass = prompt("Input your pass");

    if (user != "juan" || pass != "juan123") {
        alert(`❌Incorrect: You have a ${i-1} attempts❌`)
    } else {
        console.log("✔Welcome✔")
        break;
    }
}

if (i == 0) {
    alert("❗PAGE BLOCKED❗")
}