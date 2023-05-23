const { Schema, model, mongoose } = require("mongoose");

const AsistenciaSchema = new Schema({
  fecha: {
    type: String,
    required: [true, "La fecha es obligatoria,"],
    unique: true,
  },
  asistencias: [
    {
      brigadista: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario",
        required: true,
      },
      estado: {
        type: String,
        enum: ["presente", "ausente"],
        required: true,
      },
      cuadrilla: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cuadrilla",
        required: true,
      },
    },
  ],
});

module.exports = model('Asistencia', AsistenciaSchema);
