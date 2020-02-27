const router = require('express').Router();

const { home } = require('../controller/index.controller');
const { getData } = require('../database/queries/getData');

// router.use('/', home);
router.get('/data', (req, res) => {
  getData().then((resu) => res.json(resu.rows))
    .catch((e) => console.log(`error >>> ${e}`));
});
module.exports = router;
