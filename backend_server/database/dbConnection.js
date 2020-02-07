var log4js = require('log4js');
log4js.configure('./config/log4jsConfig.json');
var logger = log4js.getLogger('node_api');
const {
    Pool,
    Client
} = require('pg');

/*Create connection pool with the postgres database it can also be made dynamic and is mentioned in the next comment*/
var pool;
const connectionString = 'postgresql://postgres:postgres@localhost:5432/postgres'
if (pool != null) {
    pool.end();
}
pool = new Pool({
    connectionString: connectionString,
})


/*Dynamic connection to the postgres database at the time when user reach the web app*/

exports.createNewPool = (username, dbname, server, port, password) => {
    return new Promise((resolve, reject) => {
        pool.end();
        var newConnectionString = `postgresql://${username}:${password}@${server}:${port}/${dbname}`;
        logger.info("New connection string", newConnectionString)
        try {
            pool = new Pool({
                connectionString: newConnectionString,
            })
            resolve(pool)
        } catch (err) {
            reject(err);
        }

    })
}


/* Run query, using this function we just need to send our query string and the params with it*/

exports.query = async (text, params) => {
    const start = Date.now()
    return new Promise((resolve, reject) => {
        logger.info("Query ------- ", text)
        pool.query(text, params, (err, res) => {
            if (err) {
                reject(err);
            } else {
                if (res) {
                    const duration = Date.now() - start
                    resolve(res.rows)
                } else {
                    resolve([])
                }
            }
        })
    });
}
