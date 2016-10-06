/**
 * Created by jhon on 30/09/16.
 */

var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var UsuarioSchema = new Schema({
    institucionId: ObjectId,
    documento: String,
    contrasena: String,
    habilitado: {
        type: Boolean,
        default: true
    },
    tipo: {
        type: String,
        enum: ["Acudiente", "Administrativo", "Docente"]
    }
});

UsuarioSchema.pre('save', function(next) {
    var user = this;
    if (this.isModified('contrasena') || this.isNew) {
        bcrypt.hash(user.contrasena, 10, (err, hash) => {
            if (err) {
                return next(err);
            }

            user.contrasena = hash;
            next();
        });
    } else {
        return next();
    }
});

UsuarioSchema.methods.comparePassword = function(passw, cb) {

    bcrypt.compare(passw, this.contrasena, (err, isMatch) => {

        if (err) {
            return cb(err);
        }

        cb(null, isMatch);
    });
};

module.exports = mongoose.model('Usuario', UsuarioSchema);