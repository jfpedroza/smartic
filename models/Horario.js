/**
 * Created by jhon on 01/10/16.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var HorarioSchema = new Schema({
    institucionId: ObjectId,
    periodoLectivo: {
        type: Number,
        min: 1900
    },
    diaSemana: {
        type: Number,
        min: 1,
        max: 7
    },
    salonId: ObjectId,
    grupoId: ObjectId,
    asignaturaId: ObjectId,
    docenteId: ObjectId,
    hora: Date,
    jornada: {
        type: String,
        enum: [
            "Diurna",
            "Nocturna"
        ]
    }
});

module.exports = mongoose.model('Horario', HorarioSchema);