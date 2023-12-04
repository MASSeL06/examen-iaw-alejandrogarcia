const scanner = require ("prompt-sync")({sigint: true})

var capinicial = (Number)
var suma = (Number)
var totality = (Number)

var capinicial = scanner("Dame tu capital inicial: ")
let años = scanner ("Dame el numero de años: ")
let interesanu = scanner ("Dime el interes anual: ")
let aleatoriedad = Math.round (Math.random()*10)

var suma = capinicial * (interesanu/100)
var totality = suma + capinicial // lo sigue concatenando en vez de sumarlo :(

console.log (suma)
console.log (totality) //esto es lo q falla

console.log ("Has invertido " + capinicial + "€ al " + interesanu + "% de interes anual, durante " + años + " años")
console.log ("El capital previsto era: " + totality + "€")
console.log ("La aleatoriedad ha sido " + aleatoriedad + "%")
