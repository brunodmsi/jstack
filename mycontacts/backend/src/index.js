const express = require('express');
require('express-async-errors');

const routes = require('./routes');

const app = express();

app.use(express.json());

app.use((_, response, next) => {
	response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
	next();
});

app.use(routes);

/**
 * Error Handler
 */
app.use((error, _, response, _) => {
	console.log(error);
	response.sendStatus(500);
});

const port = 8000;
app.listen(port, () => `Running on port ${port}`);
