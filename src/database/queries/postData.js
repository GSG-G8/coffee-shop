const dbConnection = require('../config/connection');

const postData = (data) => {
  const {
    quantity, size, sugar, totalPrice } = data;
  const sql = {
    text: 'INSERT INTO orders (quantity, size, suger,total_price ) VALUES ($1, $2, $3,$4) RETURNING *;',
    values: [quantity, size, sugar, totalPrice],
  };
  return dbConnection.query(sql);
};

module.exports = { postData };
