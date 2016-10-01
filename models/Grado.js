/**
 * Created by jhon on 30/09/16.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GradoSchema = new Schema({
    nombre: String
});

module.exports = mongoose.model('Grado', GradoSchema);