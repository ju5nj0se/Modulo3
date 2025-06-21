function generateDay() {
    //generate a day random and return some 
    const weather = ["solear", "rain", "cloudy"]
    const timeDay = ["morning", "afternoon",  "night"]
    let umbrella = confirm("Do you have a umbrella??")

    const info = [weather[Math.floor(Math.random()*3)], timeDay[Math.floor(Math.random()*3)], umbrella]

    return info
}

function recomendTransport(callback) {
    const info = callback();
    /*
    info[0] -> weather
    info[1] -> timeDay
    info[2] -> umbrella
    */ 

    //Validations for recomend what put transport
    switch (info[2]) {
        case false:
            if (info[0] == "rain" || info[0] == "solear" || info[1] == "night") {
                console.log(info)
                alert("Take a bus or wait")
            } else {
                console.log(info)
                alert("Walk")
            }
            break;
    
        case true:
            if (info[0] == "rain" || info[0] == "solear" || info[1] == "night") {
                console.log(info)
                alert("Take a bus or walk")
            } else {
                console.log(info)
                alert("Walk")
            }
            break;
    }
}
recomendTransport(generateDay)
