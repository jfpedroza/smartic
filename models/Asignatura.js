/**
 * Created by jhon on 01/10/16.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AsignaturaSchema = new Schema({
    nombre: String
});

module.exports = mongoose.model('Asignatura', AsignaturaSchema);