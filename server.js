const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const conectarDB = require('./config/database');
const libroRoutes = require('./routes/libroRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');

const app = express();

// Conectar a MongoDB
conectarDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas
app.use('/api', libroRoutes);
app.use('/api', usuarioRoutes);

// Ruta de bienvenida
app.get('/', (req, res) => {
    res.json({
        mensaje: '📚 API de Biblioteca Pública',
        colecciones: ['Libros', 'Usuarios', 'Préstamos', 'Categorías', 'Bibliotecarios'],
        endpoints: {
            libros: '/api/libros',
            librosPorGenero: '/api/libros/genero/:genero',
            usuarios: '/api/usuarios'
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});