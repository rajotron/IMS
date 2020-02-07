
[![Node: 8.11.3](https://img.shields.io/badge/Node-%20v8.11.1-brightgreen.svg)](https://nodejs.org/ja/blog/release/v8.11.1/)
&nbsp;
[![NPM: 6.4.0](https://img.shields.io/badge/NPM-%20v6.4.0-orange.svg)](https://www.npmjs.com/package/npm/v/6.4.0)
&nbsp;&nbsp;&nbsp;

# IMS
Inventory Management System for Shopping Malls using PostgreSQL database to manage assets at particular shopping centre.

### INSTALLATION

#### Step 1
``` 
git clone https://github.com/rajotron/IMS.git
```

#### Step 2
Get into the project directory and install all packages listed in package.json file at root. 
``` 
cd IMS 
```
``` 
npm install 
```
#### Step 3
Run the backend server and as Web application is also hosted through node so you will be able to access web app also.

``` 
node server.js 
```
Access web application from this link http://localhost:9091/ 

![Login page where everthing is gonna start](https://github.com/rajotron/IMS/blob/master/screenshots/login.png)

#### Run the tests
``` 
npm test 
```


### Structure of server
##### Structure includes following modules - 
  * Controllers
  * Routes
  * Middlewares
  * Tests ( Used Jest as testing framework )
  * Database Config
  * Config
  * Logs
  * Shared functions
  * Web Application (angular 8 build)
![Structure of the backend server](https://github.com/rajotron/IMS/blob/master/screenshots/structure.png)

#### Postgres database configuration*
  * In  config/propertyFile.js you need to change the configuration according to your postgres database.
  * ![Configure postgres database](https://github.com/rajotron/IMS/blob/master/screenshots/postgresDbConfig.png)
  * Then you need to setup your database which includes creating database named as 'ims' and then creating tables (shopping centre, assets, users).
  * ![Configure postgres database](https://github.com/rajotron/IMS/blob/master/screenshots/postgresSetupDatabase.png)
  *Note: users table need to have a user in it so that you can login to web app.
  * In the above screenshot at the bottom few examples are mentioned to complete all setup.
  
#### Now you are good to go with app thorugh web application.
Checkout the screenshots of the application.
https://github.com/rajotron/IMS/blob/master/screenshots
