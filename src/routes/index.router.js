const router = require('express').Router();

const { home } = require('../controller/index.controller');

router.use('/', home);

module.exports = router;
