/**
 * Created by jhon on 30/09/16.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var GrupoSchema = new Schema({
    nombre: String,
    gradoId: ObjectId,
    directorId: ObjectId
});

module.exports = mongoose.model('Grupo', GrupoSchema);