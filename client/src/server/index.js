const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const { materiasRoute } = require("./routes");
const { sequelize } = require("./db/models");

// Middleware
app.use(cors());
app.use(express.json());

// Servir el frontend (ruta corregida)
app.use(express.static(path.join(__dirname, "..", "..", "public")));

// Ruta principal para enviar index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "..", "public", "index.html"));
});

// Rutas del backend
app.use("/materias", materiasRoute);

// Inicialización
try {
    const server = app.listen(PORT, async () => {
        await sequelize.authenticate();
        await sequelize.sync(); // o { force: true } para reiniciar DB
        console.log(`App iniciada en el puerto ${PORT}`);
    });

    server.on('error', (error) => {
        console.error('Error al iniciar el servidor:', error);
    });
} catch (error) {
    console.error('Error inesperado:', error);
}

