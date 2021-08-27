const fs = require('fs');

class Archivo {
    nombreArchivo;
    productoCargado = {
        title: "",
        price: 0,
        thumbnail: "",
    };

    constructor(nombreArchivo) {
        this.nombreArchivo = `./${nombreArchivo}.txt`
    }

    async leer() {
        // const arr = [{"pepe": 1},{"pepe": 2}]
        const arr = await this.levantarArray();
        // console.log(arr);
        for (const iterator of arr) {
            // console.log("Aca")
            console.log(iterator);
        }
        // se muestra el listado total como un array si existe el archivo
        // si no existe retorna array vacio
    }

    guardar(title, price, thumbnail) {
        // incorpora productos
        // el id se obtiene de la longitud toal del array + 1
        
    }

    borrar() {
        // elimina archivo completo
        console.log(`Se procede a eliminar el archivo ${this.nombreArchivo}`)
        fs.promises.unlink(this.nombreArchivo)
            .then(console.log("Se elimino exitosamente"))
            .catch(x => console.log(x))
    }

    async levantarArray() {
        const res = await fs.promises.readFile(this.nombreArchivo, 'utf-8')
            .then(x => x)
            .catch(err => console.log(err))
        return JSON.parse(res);
    }
}

//utilizar promesas con async await y manejo de errores

const p = new Archivo("productos");
p.leer();