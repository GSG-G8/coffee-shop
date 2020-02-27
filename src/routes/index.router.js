const router = require('express').Router();

const { home } = require('../controller/index.controller');
const { getOrder } = require('../database/queries/getData');
const { getMenu } = require('../database/queries/getData');

// router.use('/', home);
router.get('/menu', (req, res) => {
  getMenu().then((resu) => res.json(resu.rows))
    .catch((e) => console.log(`error >>> ${e}`));
});
router.get('/orders', (req, res) => {
  getOrder().then((resu) => res.json(resu.rows))
    .catch((e) => console.log(`error >>> ${e}`));
});
module.exports = router;
