/**
 * Created by jhon on 2/10/16.
 */

var JwtStrategy = require('passport-jwt').Strategy;

// load up the user model
var Usuario = require('../models/Usuario');
var config = require('../config/database'); // get db config file

module.exports = function(passport) {
    var opts = {};
    opts.secretOrKey = config.secret;
    passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
        Usuario.findOne({id: jwt_payload.id}, function(err, user) {
            if (err) {
                return done(err, false);
            }

            if (user) {
                done(null, user);
            } else {
                done(null, false);
            }
        });
    }));
};