var db = require('../database/dbConnection');
var Shared = require('../shared/sharedFunctions');
var format = require('date-fns');
var log4js = require('log4js');
log4js.configure('./config/log4jsConfig.json');
var logger = log4js.getLogger('node_api');
var property = require('../config/propertyFile.js');
var async = require('async');

//func to check the username password for login

exports.login = async (req, res) => {
    try {
        var username = req.body.username;
        var password = req.body.password;
        var checkuser = await db.query(`select * from users where username='${username}'`, []);
        if (checkuser.length == 0) {
            return res.status(200).send(Shared.errorJson(property.E003, null));
        } else if (checkuser[0].password != password) {

            return res.status(200).send(Shared.errorJson(property.E004, null));

        } else {
            return res.status(200).send(Shared.successJson("Successfully logged in", checkuser));
        }



    } catch (err) {
        logger.error("Error --- ", err)
        return res.status(400).send(Shared.errorJson(property.E001, err.detail));
        return err.detail
    }
}