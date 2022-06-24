CREATE DATABASE mycontacts;

CREATE EXTENSION "uuid-ossp";

CREATE TABLE categories (
	id uuid NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
	name VARCHAR NOT NULL
);

CREATE TABLE contacts (
	id uuid NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
	name VARCHAR NOT NULL,
	email VARCHAR UNIQUE,
	phone VARCHAR,
	category_id uuid,
	FOREIGN KEY(category_id) REFERENCES categories(id)
);
