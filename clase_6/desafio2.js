// Leer package.json y declarar un objeto con la siguiente estructura:
const info = {
    contenidoStr: "Contenido del archivo leido en formato string",
    contenidoObj: "Conteniedo del archivo leido en formato objeto",
    size: "tamaño en bytes del archivo",
}
// Luego de leer el archivo mostrar el objeto info
// guardar el objeto info en un archivo llamado info.txt dentro de la misma carpeta del package json
// incluir el manejo de errores
// usar modo asincronico con callbacks
// usar Json.parse y json stringify
// hoja 32

const fs = require('fs');

try {
    fs.readFile('packasge.json', 'utf-8', (err, res) => {
        if (err) {
            throw new Error('No se puedo leer el archivo. ' + err)
        }
        
        // retorna en bytes
        var stats = fs.statSync('package.json')
        info.size = stats["size"]
     
        info.contenidoStr = JSON.stringify(res, null, '\t');
        info.contenidoObj = JSON.parse(res);
    
        fs.writeFile('info.txt', JSON.stringify(info), error =>  {
            if (error) {
                throw new Error('No se puedo escribir el archivo. ' + error)
            }
            console.log('Saved');
        })
    })
    
} catch (error) {
    console.log(error)
}