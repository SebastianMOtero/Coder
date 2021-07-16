console.log(`Clase 0 Desafio 3.`);

// --------------------------------------------------
// Crear un objeto literal que contenga:
// - Una propiedad llamada meses con un array con los string de los meses
// - Un metodo mostrarMeses que muestre por consola los valores de dicho array, mes a mes
// - Un metodo getNumeroMes que recibira el nombre de un mes y retornara su numero asociado (1 a 12)
// - Un metodo getLetrasMes que devolvera un string con las primeras letras de cada mes

const objeto = {
    meses: [
        "enero",
        "febrero",
        "marzo",
        "abril",
        "mayo",
        "junio",
        "julio",
        "agosto",
        "septiembre",
        "octubre",
        "noviembre",
        "diciembre",
    ],
    mostrarMeses_1: function () {
        for (let i = 0; i < this.meses.length; i++) {
            console.log(this.meses[i]);
        }
    },
    mostrarMeses_2: function () {
        for (const mes of this.meses) {
            console.log(mes);
        }
    },
    getNumeroMes_1: function (nombreMes) {
        let indice = -1;
        for (let i = 0; i < this.meses.length; i++) {
            if (this.meses[i].toLowerCase() === nombreMes.toLowerCase()) {
                indice = i;
            }
        }
        return indice + 1;
    },
    getNumeroMes_2: function (nombreMes) {
        return this.meses.indexOf(nombreMes.toLowerCase()) + 1;
    },
    getLetrasMes_1: function () {
        let resultado = "";
        for (let i = 0; i < this.meses.length; i++) {
            resultado += this.meses[i][0];
        }
        return resultado;
    },
    getLetrasMes_2: function () {
        return this.meses.map(mes => mes[0]).join("");
    },
};
  
// --------------------------------------------------

console.log(`Metodo mostrarMeses: `) 
objeto.mostrarMeses_1();
console.log(`Metodo mostrarMeses: `) 
objeto.mostrarMeses_2();

console.log(`Metodo getNumeroMes: ${objeto.getNumeroMes_1("ABRIL")}`);
console.log(`Metodo getNumeroMes: ${objeto.getNumeroMes_2("ABRIL")}`);

console.log(`Metodo getLetrasMes: ${objeto.getLetrasMes_1()}`);
console.log(`Metodo getLetrasMes: ${objeto.getLetrasMes_2()}`);
