const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 9091;


//For tracking logs on daily basis
var log4js = require('log4js');
log4js.configure('./config/log4jsConfig.json');
var logger = log4js.getLogger('node_api');

// Parse requests of content-type - application/json
app.use(bodyParser.json())
var _app_folder = 'WebUI/dist/webApp'

// ---- SERVE STATIC FILES ---- //
app.get('*.*', express.static(_app_folder));

// ---- SERVE APLICATION PATHS ---- //
app.get('/', function (req, res) {
    res.status(200).sendFile(`/`, {root: _app_folder});
});

// Required all routes
require('./routes/routes.js')(app);



// Listen for requests

if (process.env.NODE_ENV !== 'test') {

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

}

module.exports = app