const express = require('express');
const cors = require('cors')
const server = express();

server.use(cors());

//imports at routes
const dataWeb = require('../routes/dataWebRouter.js');

//routers
server.use('/ativos', dataWeb);

module.exports = server