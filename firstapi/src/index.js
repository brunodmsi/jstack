const http = require('http');
const { URL } = require('url');

const routes = require('./routes');
const bodyParser = require('./helpers/body-parser');

const port = 8000;

const server = http.createServer((request, response) => {
	const parsedUrl = new URL(`http://localhost:${port}${request.url}`);
	console.log(`Request method: ${request.method} | Endpoint: ${parsedUrl.pathname}`);

	let id = null;
	let { pathname } = parsedUrl;
	
	const splitEndpoint = pathname.split('/').filter(Boolean);
	if (splitEndpoint.length > 1) {
		pathname = `/${splitEndpoint[0]}/:id`;
		id = splitEndpoint[1];
	}
	
	const route = routes.find(
		(routeObject) => 
			routeObject.endpoint === pathname && 
			routeObject.method === request.method
	);

	if (!route) {
		response.writeHead(404, { 'Content-Type': 'text/html' });
		response.end(`Cannot ${request.method} ${pathname}`);
		return;
	}

	response.send = (statusCode, body) => {
		response.writeHead(statusCode, { 'Content-Type': 'application/json' });
		response.end(JSON.stringify(body))
	}

	request.params = { id };
	request.query = Object.fromEntries(parsedUrl.searchParams);

	if (['PUT', 'POST'].includes(request.method)) {
		bodyParser(request, () => route.handler(request, response))
	} else {
		route.handler(request, response);
	}
});

server.listen(port, () => console.log(`Rodando na porta ${port}`));