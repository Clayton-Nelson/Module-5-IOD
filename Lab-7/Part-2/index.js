const express = require("express");
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const itemRoutes = require('./routes/itemRoutes')
const port = 3000

app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);

app.use('/', express.static('public'))

app.use('/index', itemRoutes)

app.listen(port, () => {
    console.log(`Example app listening
  at http://localhost:${port}`);
});