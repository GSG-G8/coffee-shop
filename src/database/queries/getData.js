const dbConnection = require('../config/connection');

const getData = () => dbConnection.query('select * from menu');

module.exports = { getData };
