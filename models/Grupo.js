/**
 * Created by jhon on 30/09/16.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var GrupoSchema = new Schema({
    institucionId: ObjectId,
    gradoId: ObjectId,
    nombre: String,
    directorId: ObjectId
});

module.exports = mongoose.model('Grupo', GrupoSchema);