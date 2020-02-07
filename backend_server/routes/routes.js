module.exports = (app) => {


    const shoppingCentreCtrl = require('../controllers/shopping_Centre_Controller.js');
    const assetsCtrl = require('../controllers/assets.js');
    const userCtrl = require('../controllers/users.js');
    const {authMiddleWare} = require('../middlewares/authenticationMW.js')


    //=========CORS enabling========================//

    app.use(function(req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', '*,x-requested-with,content-type');
        res.setHeader('Access-Control-Allow-Credentials', true);
        next();
    });

    //========= Database connection ========================//
    app.get('/db/connection', shoppingCentreCtrl.createNewConnection);  //create connection with the PostgreSQL database


    //=========User routes========================//
    app.post('/user/login', userCtrl.login);   //login to the Web application and you will get redirected to main dashboard


    //========= Using authentication middleware  ========================//
    app.use('/',authMiddleWare);


    //========= Shopping centre routes ========================//
    app.get('/shoppingcentre/getdata', shoppingCentreCtrl.table_data);  //Fetch all shopping centre details
    app.post('/shoppingcentre/update', shoppingCentreCtrl.update);   //Update particular shopping centre details



    //=========Assets routes========================//
    app.post('/assets/getdata', assetsCtrl.table_data); //Fetch all assets details for a particular shopping centre
    app.post('/assets/update', assetsCtrl.update);   //Update particular asset details


    

}