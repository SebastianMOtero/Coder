import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(8080, () => console.log('Server listen on 8080'));

app.get('/set-cookie', (request, response) => {
    const { nombre, valor, ttl } = request.query;
    console.log(request.query)
    if (typeof nombre === 'undefined' || typeof valor === 'undefined') {
      return response
        .status(400)
        .send({
          error: 'set-cookie: falta nombre o valor',
        });
    }

    if (!isNaN(ttl)) {
      return response.cookie(nombre, valor, { maxAge: ttl * 1000 }).json({proceso: 'ok'});
    } else {
      return response.cookie(nombre, valor).json({proceso: 'ok'});
    }
  });

  app.get('/get-cookie', (req, res) => {
    res.send(req.cookies);
  })

  app.get('/clear-cookie', (req, res) => {
    const { nombre } = req.query;
    
    if (typeof nombre === 'undefined') {
      return response
        .status(400)
        .send({
          error: 'clear-cookie: falta nombre',
        });
    }

    res.clearCookie(nombre).send('Cookie clear')
  })