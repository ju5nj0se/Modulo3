flag = true
while (flag) {
    let opt = prompt("1. Look profile\n2. Edit profile\n3. Log out\n4.For log out\nChoose a option!");
    opt = parseInt(opt);
    switch (opt) {
    case 1:
        alert("You are looking the profile...")
        break;
    
    case 2:
        alert("You are editing the profile...");
        break;
    
    case 3:
        alert("Yo are log out...")
        break;
    
    case 4:
        flag = false
        break;

    default:
        alert("Choose the correct option!!")
        break;
}   
}
