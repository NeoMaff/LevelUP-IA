const express = require('express');
const router = express.Router();

// Ruta para obtener stats (placeholder)
router.get('/', (req, res) => {
  // Lógica para obtener stats aquí
  res.json({ mensaje: 'Stats del usuario (pendiente de implementación)' });
});

module.exports = router;