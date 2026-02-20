const Libro = require('../models/Libro');

// CREATE - Crear libro
exports.crearLibro = async (req, res) => {
    try {
        const libro = new Libro(req.body);
        await libro.save();
        res.status(201).json(libro);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// READ - Obtener todos los libros
exports.obtenerLibros = async (req, res) => {
    try {
        const libros = await Libro.find();
        res.json(libros);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// READ - Obtener un libro por ID
exports.obtenerLibroPorId = async (req, res) => {
    try {
        const libro = await Libro.findById(req.params.id);
        if (!libro) {
            return res.status(404).json({ error: 'Libro no encontrado' });
        }
        res.json(libro);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// UPDATE - Actualizar libro
exports.actualizarLibro = async (req, res) => {
    try {
        const libro = await Libro.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!libro) {
            return res.status(404).json({ error: 'Libro no encontrado' });
        }
        res.json(libro);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// DELETE - Eliminar libro
exports.eliminarLibro = async (req, res) => {
    try {
        const libro = await Libro.findByIdAndDelete(req.params.id);
        if (!libro) {
            return res.status(404).json({ error: 'Libro no encontrado' });
        }
        res.json({ mensaje: 'Libro eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// CONSULTA SENCILLA - Buscar libros por género
exports.librosPorGenero = async (req, res) => {
    try {
        const libros = await Libro.find({ genero: req.params.genero });
        res.json(libros);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};