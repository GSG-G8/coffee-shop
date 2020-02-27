const dbConnection = require('../config/connection');

const getMenu = () => dbConnection.query('select * from menu');
const getOrder = () => dbConnection.query('select * from menu inner join orders on menu.id = orders.menuId');

module.exports = { getMenu, getOrder };
