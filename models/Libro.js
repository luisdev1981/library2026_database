const mongoose = require('mongoose');

const libroSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    autor: { type: String, required: true },
    isbn: { type: String, required: true, unique: true },
    anioPublicacion: { type: Number, required: true },
    genero: { type: String, required: true },
    ejemplaresDisponibles: { type: Number, default: 1 }
});

module.exports = mongoose.model('Libro', libroSchema);