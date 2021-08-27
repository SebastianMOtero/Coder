// Lea un archivo info.txt deserializandolo en un objeto llamado info
// representr este objeto info en la consola
// modifique el autor a coderhouse y guarde el objeto serializado en un archivo llamado package.json.coder
// mostrar los errores por consola

// usar import para acceder al modulo fs
// trabajar con fs.promises
// considerar JSON.stringify(info.contenidoObj, null, '\t')
// hoja 42

import fs from 'fs';
//    "type": "module" o .mjs

try {
    fs.promises.readFile("./info.txt", 'utf-8')
        .then(contenido => {
            const info = JSON.parse(contenido);
            console.log(info);
            info.contenidoObj.author = 'Coderhouse';
            fs.promises.writeFile("./package.json.coder", JSON.stringify(info)).then(console.log("listo")).catch()
        }) 
} catch (error) {
    
}