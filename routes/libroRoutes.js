const express = require('express');
const router = express.Router();
const libroController = require('../controllers/libroController');

router.post('/libros', libroController.crearLibro);
router.get('/libros', libroController.obtenerLibros);
router.get('/libros/:id', libroController.obtenerLibroPorId);
router.put('/libros/:id', libroController.actualizarLibro);
router.delete('/libros/:id', libroController.eliminarLibro);
router.get('/libros/genero/:genero', libroController.librosPorGenero);

module.exports = router;