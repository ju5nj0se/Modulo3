let light = function() {
    const light = prompt("Input the color of the traffict light")

    switch (light) {
        case "green":
            alert("You can start up")
            break;
        
        case "yellow":
            alert("Go to brake")
            break;
        
        case "red":
            alert("Brake")
            break;

    }
}

light()

