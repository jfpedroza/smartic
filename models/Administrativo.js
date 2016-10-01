/**
 * Created by jhon on 01/10/16.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var AdministrativoSchema = new Schema({
    institucionId: ObjectId,
    usuarioId: ObjectId,
    correo: String,
    documento: String,
    fotoURL: String,
    fecha: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Administrativo', AdministrativoSchema);