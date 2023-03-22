const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago", "Montevideo", "Ecuador","Perú");
const precioCiudad = new Array(500, 400, 380, 250, 200, 180);
const datos = [
    {
        'ciudad': 'Bogotá',
        'precio': 500 
    },
    {
        'ciudad': 'Lima',
        'precio': 400 
    },
    {
        'ciudad': 'Santiago',
        'precio': 380 
    },
    {
        'ciudad': 'Montevideo',
        'precio': 250 
    },
    {
        'ciudad': 'Ecuador',
        'precio': 500 
    },
    {
        'ciudad': 'Perú',
        'precio': 180 
    },
];


const presupuestoDisponible = 100;

let i = 0;
/* Con while se repite 0 o mas veces */
/* Do while 1 o mas veces pero solo se ejecuta con (Do)*/
while(i < datos.length && datos[i].precio > presupuestoDisponible) {
    i++;
}
if (i == datos.length){
    console.log('No tenemos pasajes disponibles: ');
}else{
    console.log('Puedes comprar pasajes para: ' +datos[i].ciudad);
}