const { Pool } = require('pg');
require('env2')('./config.env');

let dbUrl = '';
if (process.env.NODE_ENV === 'production') {
  // dburl = process.env.Prod_URL;
} else if (process.env.NODE_ENV === 'test') {
  // dbUrl = process.env.TEST_DB_URL;
} else {
  dbUrl = process.env.DEV_URL;
}
if (!dbUrl) throw new Error('No DB URL found !!!');
const options = {
  connectionString: dbUrl,
  ssl: true,
};

module.exports = new Pool(options);
