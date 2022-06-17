const express = require('express');

const routes = require('./routes');

const app = express();

app.use(express.json());

app.use((request, response, next) => {
	request.appId = 'MeuAppId';

	next();
});

app.use(routes);

const port = 8000;
app.listen(port, () => `Running on port ${port}`);
