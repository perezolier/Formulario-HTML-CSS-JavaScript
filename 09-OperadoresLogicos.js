//Operadores de Comparación 

let ciudadDestino = "Perú";
let ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago", "Montevideo", "Ecuador","Perú");
//palabra reservada if
// Evalua una condición 
/*console.log(`Verificando pasajes para  ${ciudadDestino}`);
if (ciudadesDisponibles.indexOf(ciudadDestino) >= 0) {
    console.log('Pasajes para destino ' + ciudadDestino +' estan disponibles');
}else{
    console.log('Destino no encontrado');
}
*/
let valorPasajes = "1009";

if (valorPasajes == 1000){
    console.log('El pasaje vale 1000')
}

//Operadores Lógicos
//Y (AND), O (OR), NO (NOT)
//AND = && - se deben cumplir las 2 condiciones.
//OR = || - se debe cumplir una de las condiciones.
//NOT = ! - No se cumple la condición

let edadPasajero = 19;
let estaAcompanado = false;
/*
/*----------------------------------------------------------------------- 
console.log(`Verificando pasajes para  ${ciudadDestino}`);
if (edadPasajero >= 18 || estaAcompanado){
    if ((ciudadesDisponibles.indexOf(ciudadDestino) >= 0)) {
        console.log('Pasajes para destino ' + ciudadDestino +' estan disponibles');
}
}else{
    console.log('Pasajes para destino ' + ciudadDestino +' estan disponibles');
    console.log('El pasajero no cumple con las condiciones para viajar:')
}
/* ------------------------------------------------------------------------------ 
*/

console.log(`Verificando pasajes para  ${ciudadDestino}`);
/*if ((ciudadesDisponibles.indexOf(ciudadDestino) > -1) && 
        (edadPasajero >= 18 || estaAcompanado)) {
            console.log('Pasajes para destino ' + ciudadDestino +' estan disponibles');
}else{
    console.log('Ciudad no disponible para viajar');
}*/

//Aplicando la forma lógica negativa
if (!((ciudadesDisponibles.indexOf(ciudadDestino) > -1) && 
        (edadPasajero >= 18 || estaAcompanado))) {
            console.log('Ciudad no disponible para viajar');
            
}else{
    console.log('Pasajes para destino ' + ciudadDestino +' estan disponibles');
}

