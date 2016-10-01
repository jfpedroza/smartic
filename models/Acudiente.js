/**
 * Created by jhon on 30/09/16.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var AcudienteSchema = new Schema({
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
        telefono: String,
        celular: String,
        estadoCivil: {
            type: String,
            enum: [
                "Casado",
                "Soltero",
                "Union Libre",
                "Divorciado",
                "Viudo"
            ]
        },
    },
    informacionProfesional: {
        nivelEducativo: {
            type: String,
            enum: [
                "Sin Estudio",
                "Educacion Primaria",
                "Educacion Secundaria",
                "Educacion Tecnica",
                "Educacion Universitaria"
            ]
        },
        titulo: String
    },
    fecha: {
        type: Date,
        default: Date.now()
    }
});

AcudienteSchema.virtual('nombre.completo').get(() => {
    return this.nombre.primerNombre + " "
        + this.nombre.segundoNombre + " "
        + this.nombre.primerApellido + " "
        + this.nombre.segundoNombre;
});

module.exports = mongoose.model('Acudiente', AcudienteSchema);