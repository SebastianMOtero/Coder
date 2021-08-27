// Proyecto que calcule cuantos años y dias tenemos
// que use la dependencia moment, instalandole localment
// npm install moment
// utilizar los metodos diff y format
const moment = require("moment")

function calculadora(fechaNacimiento) {
    const formato = "DD/MM/YYYY";
    const hoyEs = moment().format(formato);
    const naciEl = moment(fechaNacimiento, formato);
    console.log(`Hoy es ${hoyEs}`);
    console.log(`Naci el ${naciEl.format(formato)}`);
    console.log(`Desde mi nacimiento han pasado ${moment().diff(naciEl,'years')} años.`);
    console.log(`Desde mi nacimiento han pasado ${moment().diff(naciEl,'days')} dias.`);
}

calculadora('01/04/1992');
