/**
 * Created by jhon on 30/09/16.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var DocenteSchema = new Schema({
    institucionId: ObjectId,
    usuarioId: ObjectId,
    nombre: {
        primerNombre: String,
        segundoNombre: String,
        primerApellido: String,
        segundoApellido: String
    },
    numeroCedula: String,
    correo: String,
    informacionPersonal: {
        fechaNacimiento: Date,
        sexo: {
            type: String,
            enum: ["M", "F"]
        },
        ciudadNacimeinto: String,
        direccion: String,
        telefono: String
    },
    informacionProfesional: {
        profesion: String,
        ciudadEstudio: String,
        institucionEstudio: String,
        tipoEstudio: {
            type: String,
            enum: [
                "Tecnico",
                "Tecnologo",
                "Pregrado",
                "Especializacion",
                "Maestria",
                "Doctorado"
            ]
        },
        fechaFinEstudios: Date,
        escalafon: String,
        aniosExperiencia: Number,
        postgrado: String
    },
    docenteACargoId: ObjectId,
    cargo: {
        type: String,
        enum: [
            "Normal",
            "Director"
        ]
    },
    fotoURL: String,
    fechaIngreso: Date,
    grupoId: ObjectId,
    asignaturas: array[ObjectId],
    fecha: {
        type: Date,
        default: Date.now()
    }
});

DocenteSchema.virtual('nombre.completo').get(() => {
    return this.nombre.primerNombre + " "
        + this.nombre.segundoNombre + " "
        + this.nombre.primerApellido + " "
        + this.nombre.segundoNombre;
});

module.exports = mongoose.model('Docente', DocenteSchema);