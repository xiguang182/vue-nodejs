/**
 * Created by Real on 2017-07-30.
 */
var mysql = require('mysql');
var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'testpro'
});
module.exports = connection;