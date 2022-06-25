const express = require('express');
require('express-async-errors');

const routes = require('./routes');

const app = express();

app.use(express.json());

app.use((request, response, next) => {
	request.appId = 'MeuAppId';

	next();
});

app.use(routes);

/**
 * Error Handler
 */
app.use((error, request, response, next) => {
	console.log('#### Error Handler');
	console.log(error);
	response.sendStatus(500);
});

const port = 8000;
app.listen(port, () => `Running on port ${port}`);
