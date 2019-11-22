//Declaring a gloval variable For the app root.
global.__rootdir = __dirname;

const express = require('express');
const swagger_express = require('swagger-express-mw');
const app = express();
const connectDB = require('./config/db');
const swaggerConfig = require('./config/swaggerCon');

//Conect to the DB
connectDB();

//Init Middleware
app.use(express.json());

swagger_express.create(swaggerConfig, function(err, swaggerExpress) {
  if (err) {
    throw err;
  }
  swaggerExpress.register(app);

  const PORT = process.env.PORT || 10010;
  app.listen(PORT);
});
