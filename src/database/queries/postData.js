const dbConnection = require('../config/connection');

const postData = (data) => {
  const sql = {
    text: 'INSERT INTO orders (menuId, quantity, size, suger,total_price ) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    values: [data.menuId, data.quantity, data.size, data.suger, data.total_price],
  };
  return dbConnection.query(sql);
};

module.exports = { postData };
