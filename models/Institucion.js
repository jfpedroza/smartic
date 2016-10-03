/**
 * Created by jhon on 2/10/16.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var InstitucionSchema = new Schema({
    nombre: String,
    nit: String,
    direccion: String,
    logoURL: String
});

module.exports = mongoose.model('Institucion', InstitucionSchema);