const passwords = ["javamiamor","python123", "c#123", ]

console.log(passwords.find((element, index) => {
    if (element.length > 8 && /\d/.test(element)) {
        return element
    } else {
        return console.log(`You should change the ${index}`)
    }
}
))