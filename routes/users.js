var express = require('express');
var router = express.Router();
var Usuario = require('../models/Usuario');
var config = require("../config/database.js");
var jwt = require('jwt-simple');

/* GET users listing. */
router.get('/', (req, res, next) => {
    Usuario.find((err, users) => {
        if (err) {
            return next(err);
        }

        res.json({success: true, data: users});
    })
});

/* POST user creation. */
router.post('/', (req, res, next) => {
    if (!req.body.documento || !req.body.contrasena || !req.body.tipo) {
        res.json({success: false, msg: 'Falta un campo'});
    } else {
        Usuario.findOne({
            documento: req.body.documento
        }, function(err, user) {
            if (err) {
                return res.json({success: false, msg: 'Error ' + err.message});
            }

            if (user) {
                return res.json({success: false, msg: 'Ya existe el usuario'});
            } else {
                var newUser = new Usuario({
                    institucionId: null,
                    documento: req.body.documento,
                    contrasena: req.body.contrasena,
                    tipo: req.body.tipo
                });

                newUser.save((err) => {
                    if (err) {
                        return res.json({success: false, msg: 'Error ' + err.message});
                    }

                    return res.json({success: true});
                });
            }
        });
    }
});

/* POST user authentication*/
router.post('/authenticate', function(req, res) {
    Usuario.findOne({
        documento: req.body.documento
    }, function(err, user) {
        if (err) throw err;

        if (!user) {
            res.send({success: false, msg: 'Fallo de autenticación. Usuario no encontrado.'});
        } else {
            // check if password matches
            user.comparePassword(req.body.contrasena, function (err, isMatch) {
                if (isMatch && !err) {
                    // if user is found and password is right create a token
                    var token = jwt.encode(user, config.secret);
                    // return the information including token as JSON
                    res.json({success: true, token: 'JWT ' + token});
                } else if (!err){
                    res.send({success: false, msg: 'Fallo de autenticación. Contraseña incorrecta.'});
                } else {
                    res.send({success: false, msg: 'Fallo de autenticación. Error ' + err.message});
                }
            });
        }
    });
});

module.exports = router;
