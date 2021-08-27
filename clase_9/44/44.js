const express = require("express");
const app = express();
const multer = require('multer');

const port = 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mostramos index
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
});

// const upload = multer({ storage: storage });
const upload = multer({ 
  dest: 'uploads/', 
  filename: function(req, file, cb) {
            cb(null, Date.now() + '-' + file.originalname)
        }
})
// Subiendo un archivo
app.post("/uploadfile", upload.single('myFile1'), (req, res, next) => {
  const file =  req.file;
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)
  }
  res.send(file)
});

// personasRouter.get("/listar", (req, res) => {
//     res.json(personas);
// });

// personasRouter.post("/guardar", (req, res) => {
//     const persona =  req.body.persona;
//     personas.push(persona);
//     res.json(persona);
// });

const server = app.listen(port, () =>
  console.log(`Server listen on port ${port}`)
);

server.on("error", (error) => console.error(error));
