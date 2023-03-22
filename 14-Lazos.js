const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago", "Montevideo", "Ecuador","Perú");
const precioCiudad = new Array(500, 400, 380, 250, 200, 180);
const presupuestoDisponible = 170;

let i = 0;
/* Con while se repite 0 o mas veces */
/* Do while 1 o mas veces pero solo se ejecuta con (Do)*/
while(precioCiudad[i] > presupuestoDisponible && i < ciudadesDisponibles.length) {
    i++;
}
if (i == ciudadesDisponibles.length){
    console.log('No tenemos pasajes disponibles: ');
}else{
    console.log('Puedes comprar pasajes para: ' +ciudadesDisponibles[i]);
}
    
