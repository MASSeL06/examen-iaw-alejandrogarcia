const scanner = require ("prompt-sync")({sigint: true})

let palabra 
let palabrota = scanner ("Dame una palabra: ")
let concadena = ""

while (palabrota !== "exit") {
    if (String(palabrota)) {
        palabra = String(palabrota)
        concadena = (concadena + " " + palabra) 

    } palabrota = scanner ("Dame otra palabra: ")
}

let digitos = 0

    for (let x = 0; x < palabrota.length; x++) {
        if (
                palabrota.charAt(x) === "1" || 
                palabrota.charAt(x) === "2" || 
                palabrota.charAt(x) === "3" || 
                palabrota.charAt(x) === "4" || 
                palabrota.charAt(x) === "5" || 
                palabrota.charAt(x) === "6" || 
                palabrota.charAt(x) === "7" || 
                palabrota.charAt(x) === "8" || 
                palabrota.charAt(x) === "9" || 
                palabrota.charAt(x) === "0" ) {
                    digitos = digitos + 1 
                }   
        
    }
console.log("El numero de digitos es " + digitos)

console.log("la suma de tus cadenas es: " + concadena)
