//mapa o diccionarios
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


const presupuestoDisponible = 180;
let i = 0;
/* Con while se repite 0 o mas veces */
/* Do while 1 o mas veces pero solo se ejecuta con (Do)*/

// el For va de una valor inicial hasta un volor final 

let ciudadSeleccionada = '';
for (let i = 0; i < datos.length; i++) {

    if (datos[i].precio <= presupuestoDisponible) {
        ciudadSeleccionada = datos[i].ciudad;
        break;
    }
}

if (ciudadSeleccionada == '') {
    console.log('No tenemos pasajes disponibles: ');
} else {
    console.log('Puedes comprar pasajes para: ' + ciudadSeleccionada);
}

