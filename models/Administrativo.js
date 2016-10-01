/**
 * Created by jhon on 01/10/16.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var AdministrativoSchema = new Schema({
    usuarioId: ObjectId,
    correo: String,
    documento: String,
    fotoURL: String
});

module.exports = mongoose.model('Administrativo', AdministrativoSchema);