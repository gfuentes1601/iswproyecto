const { response, request } = require('express');

const Usuario = require('../models/usuario');

const getUsuarios = async(req = request, res = response) => {
    try {
        // find all documents
        const brigadistas = await Usuario.find({ role: 'BRIGADISTA_ROLE' }, 'nombre especialidad ciudad').exec();
        res.json({ brigadistas });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }
}

const addUsuario = async(req = request, res = response) => {
    res.json({ message: 'ADD - USUARIO' });
}

module.exports = {
    getUsuarios,
    addUsuario
}