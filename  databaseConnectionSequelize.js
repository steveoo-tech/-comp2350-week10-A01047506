const is_heroku = process.env.IS_HEROKU || false;
const dbConfigHeroku = "mysql://b8e7b31edd7f27:9ff289e0@us-cdbr-east-03.cleardb.com/heroku_25bb62d56225ffe?reconnect=true";
const dbConfigLocal = "mysql://root:Password@localhost/lab_example";
if (is_heroku) {
var databaseConnectionString = dbConfigHeroku;
}
else {
var databaseConnectionString = dbConfigLocal;
}
module.exports = databaseConnectionString;