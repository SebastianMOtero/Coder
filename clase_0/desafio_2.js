console.log(`Clase 0 Desafio 2.`);  
const valores = [true, 5, false, "adios", "hola", 2];

// --------------------------------------------------
// Realizar una funcion que reciba como parametro un array y devuelva el string mas largo
function funcionStringMasLargo_1(array) {
    let stringMasLargo = "";

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === "string" && array[i].length > stringMasLargo.length) {
            stringMasLargo = array[i];
        }
    }

    return stringMasLargo;
}

function funcionStringMasLargo_2(array) {
    return array.reduce((stringMasLargo, elemento) => typeof elemento  === "string" && elemento.length > stringMasLargo.length ? elemento : stringMasLargo, '');
}

// --------------------------------------------------
// Realizar una funcion que reciba como parametro el array y devuelva en que posicion del array se encuentra el false
function funcionIndiceFalse_1(array) {
    let indiceBuscado = -1;

    for (const i in array) {
        if (array[i] === false) {
            indiceBuscado = i;
        }
    }

    return indiceBuscado;
}

function funcionIndiceFalse_2(array) {
    return array.indexOf(false);
}

// --------------------------------------------------
// Crear una funcion que devuelva el resultado de la operacion entre los dos elementos numericos 
// que contiene el array. Dicha funcion recibira dos parametros, el array y la operacion a realizar
function funcionOperacionEntreNumeros_1(array, operacion) {
    const elementosNumericos = [];

    for (const elemento of array) {
        if (typeof elemento === "number") {
            elementosNumericos.push(elemento);
        }
    }

    switch (operacion) {
        case "suma":
            return elementosNumericos[0] + elementosNumericos[1];
        case "resta":
            return elementosNumericos[0] - elementosNumericos[1];
        case "mult":
            return elementosNumericos[0] * elementosNumericos[1];
        case "div":
            return elementosNumericos[0] / elementosNumericos[1];
        default:
            break;
    }
}

function funcionOperacionEntreNumeros_2(array, operacion) {
    const arrayFiltrado = array.filter(elemento => typeof elemento === "number");
    const operacionesValidas = {
        "suma": (a, b) => a + b, 
        "resta": (a, b) => a - b, 
        "mult": (a, b) => a * b, 
        "div": (a, b) => a / b,
    };

    return operacionesValidas[operacion](...arrayFiltrado);
}

// --------------------------------------------------
console.log(`Encontrar el string mas largo: ${funcionStringMasLargo_1(valores)}`);
console.log(`Encontrar el string mas largo: ${funcionStringMasLargo_2(valores)}`);

console.log(`Encontrar el indice de false: ${funcionIndiceFalse_1(valores)}`);
console.log(`Encontrar el indice de false: ${funcionIndiceFalse_2(valores)}`);

console.log(`Realizar operacion entre numeros: ${funcionOperacionEntreNumeros_1(valores, "suma")}`);
console.log(`Realizar operacion entre numeros: ${funcionOperacionEntreNumeros_2(valores, "suma")}`);
