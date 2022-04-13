
function positions(firstPlace, secondPlace, lastPlace) {
    let positionAtleta = []
    if (secondPlace == "Daniel") {
    positionAtleta.push("1º - Colocado = " + secondPlace, " 2º - Colocado = " + firstPlace, " 3º - Colocado = " + lastPlace)
    } else if (lastPlace == "Daniel") {
    positionAtleta.push("1º - Colocado = " + firstPlace, " 2º - Colocado = " + lastPlace, " 3º - Colocado = " + secondPlace)
    } else {
    positionAtleta.push("1º - Colocado = " + firstPlace, " 2º - Colocado = " + secondPlace, " 3º - Colocado = " + lastPlace )
    }
    return positionAtleta
}

positions ("Rafael", "Daniel", "Manoel")




