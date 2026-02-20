const mongoose = require('mongoose');

const bibliotecarioSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    telefono: { type: String, required: true },
    turno: { type: String, enum: ['mañana', 'tarde', 'noche'], required: true },
    fechaContratacion: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Bibliotecario', bibliotecarioSchema);