const app = require('./app');

// Validar que la variable de entorno PORT esté definida
const PORT = process.env.PORT || 3000;
app.set('port', PORT);

// Manejar rutas no encontradas
app.get('*', (req, res) => {
    return res.status(404).json({ msj: 'Recurso no encontrado' });
});

// Iniciar el servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor en funcionamiento en el puerto: ${app.get('port')}`);
});
