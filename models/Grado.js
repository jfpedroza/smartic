/**
 * Created by jhon on 30/09/16.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var GradoSchema = new Schema({
    institucionId: ObjectId,
    nombre: String
});

module.exports = mongoose.model('Grado', GradoSchema);