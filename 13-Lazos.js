const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago", "Montevideo", "Ecuador","Perú");
const precioCiudad = new Array(500, 400, 380, 250, 200, 180);
const presupuestoDisponible = 250;

let i = 0;
while(precioCiudad[i] > presupuestoDisponible) {
    i++;
}
console.log('Puedes comprar pasajes para: ' +ciudadesDisponibles[i]);