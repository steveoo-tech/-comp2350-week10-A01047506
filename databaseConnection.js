const mysql = require('mysql2');

const is_heroku = process.env.IS_HEROKU || false;

const dbConfigHeroku = {
	host: "us-cdbr-east-03.cleardb.com",
	user: "b8e7b31edd7f27",
	password: "9ff289e0",
	database: "heroku_25bb62d56225ffe",
	multipleStatements: false,
	namedPlaceholders: true
};

const dbConfigLocal = {
	host: "localhost",
	user: "root",
	password: "Password",
	database: "lab_example",
	multipleStatements: false,
	namedPlaceholders: true
};

if (is_heroku == 1) {
	var database = mysql.createPool(dbConfigHeroku);
}
else {
	var database = mysql.createPool(dbConfigLocal);
}

module.exports = database;
		