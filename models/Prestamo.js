const mongoose = require('mongoose');

const prestamoSchema = new mongoose.Schema({
    libroId: { type: mongoose.Schema.Types.ObjectId, ref: 'Libro', required: true },
    usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
    fechaPrestamo: { type: Date, default: Date.now },
    fechaDevolucion: { type: Date },
    fechaLimite: { type: Date, required: true },
    estado: { type: String, enum: ['activo', 'devuelto', 'vencido'], default: 'activo' }
});

module.exports = mongoose.model('Prestamo', prestamoSchema);