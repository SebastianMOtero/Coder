// funciones sincronicas
// guardar un archivos fyh.txt con la fecha y hora actual
// lea el archvio y lo muestre por consola
// incluya manejo de errores
// hoja21
const fs = require('fs');

try {
    const data = Date();
    fs.writeFileSync("fyh.txt", data);
    const dataRead = fs.readFileSync("fyh.txt", "utf-8");
    console.log(dataRead)
} catch (error) {
    throw new Error(error)
}
