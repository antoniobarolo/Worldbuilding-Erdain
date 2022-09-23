//escolher e = eccentricidade entre 0.4 - 0.7

function binarystar(a, Mn, En, Mg, Eg) {
    Rg = (a * (Mn / (Mg + Mn))).toFixed(0) //distancia da estrela pro baricentro
    Rn = (a * (Mg / (Mg + Mn))).toFixed(0)

    minSepG = ((1 - Eg) * Rg).toFixed(0)
    maxSepG = ((1 + Eg) * Rg).toFixed(0)
    minSepN = ((1 - En) * Rn).toFixed(0)
    maxSepN = ((1 + En) * Rn).toFixed(0)

    totalmin = parseFloat(minSepG) + parseFloat(minSepN)
    totalmax = parseFloat(maxSepG) + parseFloat(maxSepN)

    console.log( `Narh:\n raio: ${Rn} AU, min-max sep: ${minSepN}-${maxSepN} AU \n\nGhal:\n raio: ${Rg} AU, min-max sep: ${minSepG}-${maxSepG} AU \n\nTotal min-max sep: ${totalmin}-${totalmax} AU`)
}
/* 
binarystar(128, 0.8, 0.36, 1.66, 0.5)

Narh:
 raio: 86 AU, min-max sep: 55-117 AU 

Ghal:
 raio: 42 AU, min-max sep: 21-63 AU 

Total min-max sep: 76-180 AU

as orbitas iam durar uns 5000 anos p menos cipa
mano é mt instavel essa proximidade principalmente no começo em q os sois se encontraram kkkk

17000kph o sistema solar pelo neighbourhood local
*/