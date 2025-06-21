let calification = prompt("Input a calification of service the 1 to 5");

let flag = true;
while (flag) {
    switch (parseInt(calification)) {
        case 5:
            alert("Thank you for calification us 😁")
            flag = false
            break;
    
        case 4:
            calification = prompt("Why 4 if not 5?\nTry again 🤭");
            break;

        case 3:
            calification = prompt("Why 3 if not 5? \nTry again 🤭");
            break;

        case 2:
            calification = prompt("Why 2 if not 5? \nTry again 🤭");
            break;

        case 1:
            calification = prompt("Why 1 if not 5? \nTry again 🤭");
            break;
    }
}