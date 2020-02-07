var db = require('../database/dbConnection');
var Shared = require('../shared/sharedFunctions');
var format = require('date-fns');
var log4js = require('log4js');
log4js.configure('./config/log4jsConfig.json');
var logger = log4js.getLogger('node_api');
var property = require('../config/propertyFile.js');
var async = require('async');

// Fetch all assets details of particular shopping centre according to shopping centre unique id centre details

exports.table_data = async (req, res) => {
    try {
        var shoppingCentreId = req.body.id;

        //fetch asset details using sql using query from the postgres database

        var queryResp = await db.query(`select * from assets where shoppingcentre_id = '${shoppingCentreId}';`, []);

        logger.info("Result of the query  -- ", queryResp);
        return res.status(200).send(Shared.successJson(property.S002, queryResp));

    } catch (err) {
        logger.error("Error --- ", err)
        return res.status(400).send(Shared.errorJson(property.E001, err.detail));
    }
}

// Update the asset details and also of the associated shopping centre (Who and when the details of the asset has been updated --> just audit details)

exports.update = async (req, res) => {
    try {
        var updatedData = req.body.data;
        var username = req.body.username;

        //update asset details using sql using query from the postgres database

        var queryResp = await db.query(`UPDATE assets
                                        SET name = '${updatedData.name }',
                                            address= '${updatedData.address}',
                                            dimension= '${updatedData.dimension}',
                                            shoppingcentre_id= '${updatedData.shoppingcentre_id}',
                                            updated_at= current_timestamp,
                                            updated_by = '${username}'
                                        WHERE
                                           asset_id='${updatedData.asset_id}';`, []);

        //update shopping centre details using sql using query from the postgres database

        var queryResp2 = await db.query(`UPDATE shoppingcentre
                                        SET updated_at= current_timestamp,
                                            updated_by = '${username}'
                                        WHERE
                                           id='${updatedData.shoppingcentre_id}';`, []);
        return res.status(200).send(Shared.successJson(property.S004, null));
    } catch (err) {
        logger.error("Error --- ", err)
        return res.status(400).send(Shared.errorJson(property.E001, err.detail));
    }
};