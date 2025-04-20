const express = require('express');
const router = express.Router();

// Ruta para obtener misiones (placeholder)
router.get('/', (req, res) => {
  // Lógica para obtener misiones aquí
  res.json({ mensaje: 'Listado de misiones (pendiente de implementación)' });
});

// Ruta para crear misión (placeholder)
router.post('/', (req, res) => {
  // Lógica para crear misión aquí
  res.json({ mensaje: 'Creación de misión (pendiente de implementación)' });
});

module.exports = router;