const dotenv = require('dotenv')
const express = require('express')
const app = express()
dotenv.config()
const { mongoConn } = require('./databases/configuration')
mongoConn()

const cors = require('cors')

app.use(express.urlencoded({extended : false}))
app.use(express.json())
app.use(cors({
    origin : '*'
}));

// Importar las rutas
const generos = require('./routes/generos');
const directores = require('./routes/directores');
const productoras = require('./routes/productoras');
const tipos = require('./routes/tipos');
const media = require('./routes/media');

// Usar las rutas
app.use('/api/v1/generos', generos);
app.use('/api/v1/directores', directores);
app.use('/api/v1/productoras', productoras);
app.use('/api/v1/tipos', tipos);
app.use('/api/v1/media', media);

module.exports = app