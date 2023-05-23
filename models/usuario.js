const { Schema, model, mongoose } = require('mongoose');

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    especialidad: {
        type: String,
        required: [true, 'La especialidad es obligatoria']
    },
    fecha_nacimiento: {
        type: String,
    },
    ciudad: {
        type: String,
        required: [true, 'La ciudad es obligatoria']
    },
    role: {
        type: String,
        required: [true, 'El rol es obligatorio'],
        emun: ['ADMIN_ROLE', 'BRIGADISTA_ROLE']
    },
    cuadrilla: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cuadrilla'
    },
});

UsuarioSchema.methods.toJSON = function() {
    const { __v, _id, ...usuario } = this.toObject();
    usuario.uid = _id;

    return usuario;
}

module.exports = model('Usuario', UsuarioSchema);