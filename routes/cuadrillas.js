const { Router } = require('express');
const { getCuadrillas } = require('../controllers/cuadrilla');


const router = Router();

// Rutas
router.get('/', getCuadrillas);

module.exports = router;