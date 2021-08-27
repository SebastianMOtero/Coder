// ~2.29.1
import moment from 'moment'

function calculadora(fechaNacimiento) {
    const formato = "MM/DD/YY";
    const hoyEs = moment().format(formato);
    const naciEl = moment(fechaNacimiento, "DD/MM/YYYY");
    console.log(`Hoy es ${hoyEs}`);
    console.log(`Naci el ${naciEl.format(formato)}`);
    console.log(`Desde mi nacimiento han pasado ${moment().diff(naciEl,'years')} años.`);
    console.log(`Desde mi nacimiento han pasado ${moment().diff(naciEl,'days')} dias.`);
};

calculadora('01/04/1992');
