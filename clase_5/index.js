const obj = {};
const max = 20;
const min = 1;

for (let index = 0; index < 1000; index++) {
    const pepe = Math.round(Math.random() * (max - min) + min);

    obj[pepe] = obj[pepe] ? obj[pepe] + 1 : 1;

    // if (obj[pepe]) {
    //     obj[pepe]++;
    // } else {
    //     obj[pepe] = 1;
    // }
}
console.log(obj)


let productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terraqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 },
];

console.log( productos.map(producto => producto.nombre) );
// console.log( productos.reduce((acc, curr) => acc + curr.precio),0)
console.log( productos.reduce(function(a, b){ return a + b.precio; },0).toFixed(2) )
// 201.208
console.log( productos.reduce(function(a, b){ return a + b.precio / 6; },0).toFixed(2) )

console.log( productos.reduce(function(a, b){ 
    if (a.precio < b.precio) return b;
    return a;
 }) );

 console.log( productos.reduce(function(a, b){ 
    if (a.precio > b.precio) return b;
    return a;
 }) );