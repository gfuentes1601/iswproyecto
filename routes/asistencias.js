const { Router } = require('express');
const { getAsistencias, addAsistencia } = require('../controllers/asistencia');


const router = Router();

// Rutas
router.get('/', getAsistencias);
router.post('/', addAsistencia);

module.exports = router;