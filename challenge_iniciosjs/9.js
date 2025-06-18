function balance() {
    const target = prompt("Input your type of target (standart/premium)")
    const count = prompt("Input you balance of yout bancary count")

    if (isNaN(count)) {
        console.warn("Input valid balance")
    } else if (parseFloat(count) > 10_000) {
        console.log("Insuficient balance")
    } else if (parseFloat(count) > 10_000 && parseInt(count) <1_000_000) {
        console.log("Moderated balance")
    } else if (parseFloat(1_000_000) || target == "premium") {
        console.log("Client preference")
    }
}