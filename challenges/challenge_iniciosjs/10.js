const day = prompt("Input the day of the week")

switch (day.toLocaleLowerCase()) {
    case "monday":
        console.info("We have a menu A")
        break;

    case "tuesday":
        console.info("We have a menu B")
        break;

    case "wednesday":
        console.info("We have a menu C")
        break;
    
    case "thursday":
        console.info("We have a menu D")
        break;

    case "friday":
        console.info("We have a menu E")
    
    case "saturday":
        console.info("We have a F")
        break;
    
    case "sunday":
        console.info("We don't work today")
}