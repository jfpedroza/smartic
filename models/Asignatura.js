/**
 * Created by jhon on 01/10/16.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var AsignaturaSchema = new Schema({
    institucionId: ObjectId,
    nombre: String
});

module.exports = mongoose.model('Asignatura', AsignaturaSchema);