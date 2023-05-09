console.log("#-----------------------")

function startTime(hours){
    //                         Minuten  /  Sekunden   / Millisekunden
    const millissecound = hours * 60 *        60          * 1000

    setTimeout(names,millissecound)
}

function names() {
    console.log("hey! hier können Sie meine webseite Aboniren")
}



startTime(2) // zwei Skunden