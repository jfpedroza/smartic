/**
 * Created by jhon on 01/10/16.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var MatriculaSchema = new Schema({
    institucionId: ObjectId,
    periodoLectivo: {
        type: Number,
        min: 1900
    },
    grupoId: ObjectId,
    estudianteId: ObjectId,
    tipo: {
        type: String,
        enum: [
            "Matricula",
            "PreMatricula"
        ]
    },
    fecha: {
        type: Date,
        default: Date.now()
    },
    estado: {
        type: String,
        enum: [
            "Activo",
            "Finalizado",
            "Retirado"
        ]
    },
    jornada: {
        type: String,
        enum: [
            "Diurna",
            "Nocturna"
        ]
    }
});

module.exports = mongoose.model('Matricula', MatriculaSchema);