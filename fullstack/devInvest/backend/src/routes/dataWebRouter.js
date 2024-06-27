const express = require('express');
const router = express.Router();

const dataActiveRoute = require('../controller/getDataActiveController');
router.get('/', new dataActiveRoute().handle);


module.exports = router;