const express = require('express');
require('express-async-errors');

const routes = require('./routes');
const cors = require('./app/middlewares/cors');
const errorHandler = require('./app/middlewares/errorHandler');

const app = express();

app.use(express.json());

app.use(cors);

app.use(routes);

/**
 * Error Handler
 */
app.use(errorHandler);

const port = 8000;
app.listen(port, () => `Running on port ${port}`);
