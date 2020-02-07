var db = require('../database/dbConnection');
var Shared = require('../shared/sharedFunctions');
var format = require('date-fns');
var log4js = require('log4js');
log4js.configure('./config/log4jsConfig.json');
var logger = log4js.getLogger('node_api');
var property = require('../config/propertyFile.js');
var async = require('async');

//middleware to check whether the username exist in the database and if exist 
//then the token associated with it in the headers of the request matches with it or not.

exports.authMiddleWare = async (req, res, next) => {
    try {
        var username = req.headers['username'];
        var token = req.headers['token'];

        var queryResp = await db.query(`select * from users where username='${username}';`, []);

        if(queryResp.length == 0){
             return res.status(200).send(Shared.errorJson(property.E005, null));
        }

        if(queryResp[0].token != token)
        {
             return res.status(200).send(Shared.errorJson(property.E005, null));
        }


       return next();

    } catch (err) {
        logger.error(err);
        return res.status(200).send(Shared.errorJson(property.E001, null));
        return err.detail
    }
}