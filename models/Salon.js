/**
 * Created by jhon on 30/09/16.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var SalonSchema = new Schema({
    institucionId: ObjectId,
    nombre: String,
    capacidad: {
        type: Number,
        min: 0
    },
    tipo: {
        type: String,
        enum: [
            "Cerrado",
            "Abierto",
            "Auditorio"
        ]
    }
});

module.exports = mongoose.model('Salon', SalonSchema);