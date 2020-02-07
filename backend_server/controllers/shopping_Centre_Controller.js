var db = require('../database/dbConnection');
var Shared = require('../shared/sharedFunctions');
var format = require('date-fns');
var log4js = require('log4js');
log4js.configure('./config/log4jsConfig.json');
var logger = log4js.getLogger('node_api');
var property = require('../config/propertyFile.js');
var async = require('async');

//create connection with the postgres database "iws" and you can configure the params for connection to the database 
//through propertFile.js

exports.createNewConnection = async (req, res) => {
    try {
        var dbName = property.databaseConfig.database;
        var port = property.databaseConfig.port;
        var serverName = property.databaseConfig.server;
        var password = property.databaseConfig.password;
        var username = property.databaseConfig.username;
        var queryResp = await db.createNewPool(username, dbName, serverName, port, password);
        var checkDbexistsquery = `select exists(SELECT datname FROM pg_catalog.pg_database WHERE lower(datname) = lower('${dbName}'));`
        var checkDB = await db.query(checkDbexistsquery, []);
        if (checkDB[0].exists == false) {
            return res.status(200).send(Shared.errorJson(property.E002, null));
        }


        return res.status(200).send(Shared.successJson(property.S005, null));

    } catch (err) {
        return res.status(400).send(Shared.errorJson(property.E001, null));
        return err.detail
    }
}

// fetch shopping details from the iws database and shoppingcentre table 

exports.table_data = async (req, res) => {
    try {
        var queryResp = await db.query(`select * from shoppingcentre;`, []);
        return res.status(200).send(Shared.successJson(property.S001, queryResp));

    } catch (err) {
        logger.error("Error --- ", err)
        return res.status(400).send(Shared.errorJson(property.E001, err.detail));
    }
}

// update the shopping details of particular centre and update by whom and when it has been done 

exports.update = async (req, res) => {
    try {
        var updatedData = req.body.data;
        var username = req.body.username;
        var queryResp = await db.query(`UPDATE shoppingcentre
                                        SET name = '${updatedData.name }',
                                            address= '${updatedData.address}',
                                            updated_at= current_timestamp,
                                            updated_by = '${username}'
                                        WHERE
                                           id='${updatedData.id}';`, []);
        return res.status(200).send(Shared.successJson(property.S003, null));
    } catch (err) {
        logger.error("Error --- ", err)
        return res.status(400).send(Shared.errorJson(property.E001, err.detail));
    }
};