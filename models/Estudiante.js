/**
 * Created by jhon on 30/09/16.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var EstudianteSchema = new Schema({
    institucionId: ObjectId,
    nombre: {
        primerNombre: String,
        segundoNombre: String,
        primerApellido: String,
        segundoApellido: String
    },
    tipoDocumento: {
        type: String,
        enum: ["RC", "TI", "CC", "CE"]
    },
    documento: String,
    acudienteId: ObjectId,
    informacionPersonal: {
        fechaNacimiento: Date,
        sexo: {
            type: String,
            enum: ["M", "F"]
        },
        ciudadNacimeinto: String,
        direccion: String,
        estrato: {
            type: Number,
            min: 0
        },
        parentescoAcudiente: String,
        viveConAcudiente: Boolean
    },
    fnformacionAcademica: {
        instProcedenciaId: ObjectId,
        motivoRetiro: String
    },
    fechaInscripcion: Date,
    matriculaId: ObjectId,
    fotoURL: String
});

EstudianteSchema.virtual('nombre.completo').get(() => {
    return this.nombre.primerNombre + " "
            + this.nombre.segundoNombre + " "
            + this.nombre.primerApellido + " "
            + this.nombre.segundoNombre;
});

module.exports = mongoose.model('Estudiante', EstudianteSchema);