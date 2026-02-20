const mongoose = require('mongoose');
require('dotenv').config();
const Libro = require('./models/Libro');
const Usuario = require('./models/Usuario');
const Prestamo = require('./models/Prestamo');
const Categoria = require('./models/Categoria');
const Bibliotecario = require('./models/Bibliotecario');

const datosIniciales = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Conectado a MongoDB');

        // Limpiar colecciones
        await Promise.all([
            Libro.deleteMany({}),
            Usuario.deleteMany({}),
            Prestamo.deleteMany({}),
            Categoria.deleteMany({}),
            Bibliotecario.deleteMany({})
        ]);

        // Insertar categorías
        const categorias = await Categoria.insertMany([
            { nombre: 'Ficción', descripcion: 'Libros de ficción literaria', seccion: 'A', estante: '1' },
            { nombre: 'Ciencia', descripcion: 'Libros científicos', seccion: 'B', estante: '2' },
            { nombre: 'Historia', descripcion: 'Libros históricos', seccion: 'C', estante: '3' },
            { nombre: 'Infantil', descripcion: 'Libros para niños', seccion: 'D', estante: '4' }
        ]);

        // Insertar libros
        const libros = await Libro.insertMany([
            { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', isbn: '978-84-9759-123-4', anioPublicacion: 1967, genero: 'Ficción', ejemplaresDisponibles: 5 },
            { titulo: 'El origen de las especies', autor: 'Charles Darwin', isbn: '978-84-9759-456-1', anioPublicacion: 1859, genero: 'Ciencia', ejemplaresDisponibles: 3 },
            { titulo: 'Breve historia del tiempo', autor: 'Stephen Hawking', isbn: '978-84-9759-789-2', anioPublicacion: 1988, genero: 'Ciencia', ejemplaresDisponibles: 2 },
            { titulo: 'La historia de México', autor: 'Varios', isbn: '978-84-9759-321-7', anioPublicacion: 2000, genero: 'Historia', ejemplaresDisponibles: 4 }
        ]);

        // Insertar usuarios
        const usuarios = await Usuario.insertMany([
            { nombre: 'Juan Pérez', email: 'juan@email.com', telefono: '555-0101', direccion: 'Calle 1 #123' },
            { nombre: 'María García', email: 'maria@email.com', telefono: '555-0102', direccion: 'Calle 2 #456' },
            { nombre: 'Carlos López', email: 'carlos@email.com', telefono: '555-0103', direccion: 'Calle 3 #789' }
        ]);

        // Insertar bibliotecarios
        await Bibliotecario.insertMany([
            { nombre: 'Ana Martínez', email: 'ana@biblioteca.com', telefono: '555-0201', turno: 'mañana' },
            { nombre: 'Pedro Sánchez', email: 'pedro@biblioteca.com', telefono: '555-0202', turno: 'tarde' },
            { nombre: 'Laura Torres', email: 'laura@biblioteca.com', telefono: '555-0203', turno: 'noche' }
        ]);

        // Insertar préstamos
        const fechaLimite = new Date();
        fechaLimite.setDate(fechaLimite.getDate() + 15);
        
        await Prestamo.insertMany([
            { libroId: libros[0]._id, usuarioId: usuarios[0]._id, fechaLimite, estado: 'activo' },
            { libroId: libros[1]._id, usuarioId: usuarios[1]._id, fechaLimite, estado: 'activo' }
        ]);

        console.log('✅ Datos iniciales insertados correctamente');
        console.log('📚 Total libros:', libros.length);
        console.log('👥 Total usuarios:', usuarios.length);
        
        process.exit(0);
    } catch (error) {
        console.error('❌ Error:', error);
        process.exit(1);
    }
};

datosIniciales();