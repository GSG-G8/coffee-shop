const router = require('express').Router();

const { home } = require('../controller/index.controller');
const { getOrder } = require('../database/queries/getData');
const { getMenu } = require('../database/queries/getData');
const {postData} = require('../database/queries/postData')

// router.use('/', home);
router.get('/menu', (req, res) => {
  getMenu().then((result) => res.json(result.rows))
    .catch((e) => console.log(`error >>> ${e}`));
});
router.get('/orders', (req, res) => {
  getOrder().then((result) => res.json(result.rows))
    .catch((e) => console.log(`error >>> ${e}`));
});

router.post('/order', (req, res) => {
  const orderInfo = req.body;
  postData(orderInfo).then((res) => console.log(res))
    .catch((e) => console.log(`error >>> ${e}`));
});
module.exports = router;
