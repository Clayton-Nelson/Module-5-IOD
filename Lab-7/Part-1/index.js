const express = require("express");
const app = express();
const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');
port = 3000

app.use('/', express.static('public'))

// import all calculator routes (up top)
const calculatorRoutes =
require('./routes/calculatorRoutes');

// map the calculator routes to our app
app.use('/calculator', calculatorRoutes)

app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);

app.listen(port, () => {
    console.log(`Example app listening
  at http://localhost:${port}`);
});