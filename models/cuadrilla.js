const { Schema, model } = require('mongoose');

const CuadrillaSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre de cuadrilla es obligatorio']
    },
    numero: {
        type: Number,
        required: [true, 'El numero de cuadrilla es obligatoria']
    },

    base: {
        type: String,
        required: [true, 'La base donde se encuentra la cuadrilla es obligatoria']
    }
});

CuadrillaSchema.methods.toJSON = function() {
    const { __v, _id, ...cuadrilla } = this.toObject();
    cuadrilla.uid = _id;

    return cuadrilla;
}

module.exports = model('Cuadrilla', CuadrillaSchema);