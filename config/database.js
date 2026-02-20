const mongoose = require('mongoose');
require('dotenv').config();

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('✅ Conexión exitosa a MongoDB');
        console.log('📁 Base de datos:', mongoose.connection.name);
        console.log('📚 Colecciones disponibles: Libros, Usuarios, Prestamos, Categorias, Bibliotecarios');
    } catch (error) {
        console.error('❌ Error conectando a MongoDB:', error.message);
        process.exit(1);
    }
};

module.exports = conectarDB;