const { response, request } = require('express');

const Cuadrilla = require('../models/cuadrilla');

const getCuadrillas = async(req = request, res = response) => {
    // find all documents
    const cuadrillas = await Cuadrilla.find({});
    res.json({ cuadrillas });
}


module.exports = {
    getCuadrillas,
}