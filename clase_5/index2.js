const http = require("http");
const server = http.createServer((req, res) => {
    const hour = new Date().getHours() + 4;
    console.log(hour - 4);

    if (hour < 10) {
        console.log("Buenas noches");
    } else if (hour < 17) {
        console.log("Buenas dias");
    } else {
        console.log("Buenas tardes");
    }

    res.end();
    // switch (hour) {
    //     case (hour < 10):
    //         console.log("Buenas noches");
    //         break;
    //     case (hour < 17):
    //         console.log("Buenas dias");
    //         break;
    //     // default:
    //     //     console.log("Buenas tardes");
    //     //     break;
    // }

    // sum 6
    // 0 a 5 buenas noches   6 a 11
    // 6 a 12 buenos dias    12 a 18
    // 13 a 19 buenas tardes 19 a 0
    // 20 a 0 buenas noches  23 a 3

    // Sumo 4
    // 0 a 9
    // 10 a 16
    // 17 a 23
//   if (hour >= 6 && hour <= 12) {
//     response.end("Buenos dias!");
//     return;
//   }

//   if (hour >= 13 && hour <= 19) {
//     response.end("Buenas tardes!");
//     return;
//   }

//   if (hour >= 20 && hour <= 5) {
//     response.end("Buenas noches!");
//     return;
//   }
});

server.listen(8080, function () {
  console.log(`Servidor listo en ${this.address().port}!`);
});