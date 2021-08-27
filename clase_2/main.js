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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
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
var numero1;
var numero2;
var resultado;
var operacion = function (numero1, numero2, nombreOperacion) {
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var claseSuma, sumaObjeto, resultado_1, claseResta, restaObjeto, resultado_2, instance;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(nombreOperacion === '+')) return [3 /*break*/, 2];
                    return [4 /*yield*/, Promise.resolve().then(function () { return require('./suma'); })];
                case 1:
                    claseSuma = (_a.sent()).Suma;
                    sumaObjeto = new claseSuma(numero1, numero2);
                    resultado_1 = sumaObjeto.resultado();
                    console.log(resultado_1);
                    resolve(resultado_1);
                    return [3 /*break*/, 5];
                case 2:
                    if (!(nombreOperacion === '-')) return [3 /*break*/, 4];
                    return [4 /*yield*/, Promise.resolve().then(function () { return require('./suma'); })];
                case 3:
                    claseResta = (_a.sent()).Suma;
                    restaObjeto = new claseResta(numero1, numero2);
                    resultado_2 = restaObjeto.resultado();
                    resolve(resultado_2);
                    return [3 /*break*/, 5];
                case 4:
                    instance = new Error("qwe");
                    reject(instance.message);
                    _a.label = 5;
                case 5: return [2 /*return*/];
            }
        });
    }); });
};
operacion(6, 4, '+');
try {
    operacion(6, 4, 'pepe')["catch"](function (x) { return console.log(x); });
}
catch (error) {
    console.log("saraza: " + error);
}
var operaciones = (operacion(4, 5, '-'));
