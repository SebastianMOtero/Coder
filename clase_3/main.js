function leerTexto(texto, callback, delay = 1000) {
    const palabra = texto.split(" ");
    let index = 0;
    const intervalId = setInterval(() => {
      if (index === palabra.length - 1) {
        clearInterval(intervalId);
        callback(palabra.length);
      }
      index++;
    }, delay);
}

leerTexto("La Policía Federal había ido", (palabras) => {
    let palabrasTotales = palabras;
    leerTexto("En un primer momento no se encontró", (palabras) => {
        palabrasTotales += palabras;
        leerTexto("72 horas después", (palabras) => {
            palabrasTotales += palabras;
            console.log("Proceso completado");
            console.log(`Cantidad de palabras totales: ${palabrasTotales}`)
        }, 2000)
    }, 0)
}, 0)


const wordCounter = (sentence, callback, time=1000, contador=0)=>{
    let i = 0;
    const words = sentence.split(" ");
    const intervalId = setInterval(() => {
        console.log(words[i]);
        i++;       
        if (i === words.length) {           
            contador+=i;
            callback(contador);
            clearInterval(intervalId);
        }
    }, time);
}

wordCounter( "Primera hola que",(contador) => {
    wordCounter("Segunda frace", (contador) => {
        wordCounter("Tercera frace diferente", (contador)=>{
            console.log(`${contador} palabras.\nproceso completo!`);
        }, 4000, contador)    
    },3000, contador);
});