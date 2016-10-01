/**
 * Created by jhon on 01/10/16.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var MensajeSchema = new Schema({
    institucionId: ObjectId,
    emisorId: ObjectId,
    receptorId: ObjectId,
    fecha: {
        type: Date,
        default: Date.now()
    },
    contenido: String
});

module.exports = mongoose.model('Mensaje', MensajeSchema);