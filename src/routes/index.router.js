const router = require('express').Router();


const { getOrder } = require('../database/queries/getData');
const { getMenu } = require('../database/queries/getData');
const { postData } = require('../database/queries/postData');

router.get('/menu', (req, res) => {
  getMenu().then((result) => res.json(result.rows))
    .catch(console.error);
});
router.get('/orders', (req, res) => {
  getOrder().then((result) => res.json(result.rows))
    .catch(console.error);
});
router.post('/order', (req, res) => {
  postData(req.body).then(() => res.redirect('/'))
    .catch(console.error);
});
module.exports = router;
