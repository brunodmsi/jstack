const { Client } = require('pg');

const client = new Client({
	host: '172.23.80.1',
	port: 5432,
	user: 'root',
	password: 'root',
	database: 'mycontacts',
});

client.connect();

exports.query = async (query, values) => {
	const { rows } = await client.query(query, values);
	return rows;
};
