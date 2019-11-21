const SwaggerExpress = require('swagger-express-mw');
const app = require('express')();
const connectDB = require('./config/db');

const config = {
  appRoot: __dirname
};
connectDB();

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) {
    throw err;
  }
  swaggerExpress.register(app);

  const PORT = process.env.PORT || 10010;
  app.listen(PORT);
});
