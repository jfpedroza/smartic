/**
 * Created by jhon on 30/09/16.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsuarioSchema = new Schema({
    documento: String,
    contrasena: String,
    habilitado: Boolean,
    tipo: {
        type: String,
        enum: ["Acudiente", "Administrativo", "Docente"]
    }
});

module.exports = mongoose.model('Usuario', UsuarioSchema);