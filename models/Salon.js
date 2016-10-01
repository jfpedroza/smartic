/**
 * Created by jhon on 30/09/16.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SalonSchema = new Schema({
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