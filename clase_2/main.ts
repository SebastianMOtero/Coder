
// async function operacion(valor_A:number, valor_B: number, operacion: string): Promise<number> {
//     switch (operacion) {
//         case "suma":
//             return new Promise(async (resolve, reject) => {
//                 // const ssuma = await import("./suma").then(objSuma => objSuma.Suma);
//                 try {
//                     const claseSuma = (await import("./suma")).Suma;
//                     const suma = new claseSuma(valor_A, valor_B);
//                     resolve(suma.resultado());
//                 } catch (error) {
//                     reject(`Error en funcion operacion: 
//             - ${error}`)
//                 }
//             })
//         case "resta":
//             return new Promise(async (resolve, reject) => {
//                 try {
//                     const claseResta = (await import("./resta")).Resta;
//                     const resta = new claseResta(valor_A, valor_B);
//                      resolve(resta.resultado());
//                 } catch (error) {
//                     reject(`Error en funcion operacion: 
//             - ${error}`)
//                 }
//             })
//         default:
//             throw new Error(`Operacion ${operacion} invalida. Ingrese "suma" o "resta".`);
//     }
// }

// (async function operaciones() {
//     try {
//         const r1 = operacion(2, 3, "suma").then(x => console.log(x));
//         operacion(2, 4, "suma").then(x => console.log(x));
//         // console.log(r1);
        
//     } catch (error) {
//         console.log(`Error en main: 
//     - ${error}`)
//     }
// })();


let numero1:number; 
let numero2:number; 
let resultado:number;
const operacion = (numero1:number, numero2:number, nombreOperacion:string) => {
    return new Promise(async (resolve, reject) => {

        if(nombreOperacion === '+') {

            const claseSuma = (await import ('./suma')).Suma;
            const sumaObjeto = new claseSuma(numero1, numero2);
            const resultado = sumaObjeto.resultado();
            console.log(resultado);
            resolve(resultado)

        } else if (nombreOperacion === '-') {

            const claseResta = (await import ('./suma')).Suma;
            const restaObjeto = new claseResta(numero1, numero2);
            const resultado = restaObjeto.resultado();
            resolve(resultado)
        } else {  
            var instance = new Error("qwe")
            reject(instance.message) 
        } 
      }
    ) };

operacion(6, 4, '+');
try {
    operacion(6, 4, 'pepe').catch(x => console.log(x));
    
} catch (error) {
    console.log("saraza: " + error)
}
const operaciones = (operacion(4, 5,'-')) ;