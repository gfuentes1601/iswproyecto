const { Router } = require('express');
const { getUsuarios, addUsuario } = require('../controllers/usuario');


const router = Router();

// Rutas
router.get('/', getUsuarios);

router.post('/', addUsuario);

module.exports = router;