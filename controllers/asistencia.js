const { response, request } = require('express');
const Asistencia = require('../models/asistencia');

const getAsistencias = async(req = request, res = response) => {
    // find all documents
    const asistencias = await Asistencia.find({});
    res.json({ asistencias });
}

const addAsistencia = async(req = request, res = response) => {
    const { fecha, asistencias } = req.body;
    const data = { fecha, asistencias };

    try {
        const asistenciaDB = await Asistencia.findOne({ fecha });

        if (asistenciaDB) {
            return res.status(401).json({
                message: `La asistencia para la fecha ${ fecha } ya existe.`
            });
        }

        const saveAsistencia = new Asistencia(data);
    
        // Guardar asistencia
        saveAsistencia.save();
        res.json({ asistencia: saveAsistencia });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Ha ocurrido un error en el servidor' });
    }
}


module.exports = {
    getAsistencias,
    addAsistencia
}