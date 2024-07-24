const express = require('express');
const router = express.Router();

const dataActiveRoute = require('../controller/getDataActiveController');
const updateDataActive = require('../controller/updateDataActive');

router.get('/', new dataActiveRoute().handle);
router.get('/update', new updateDataActive().handleService);

module.exports = router;
