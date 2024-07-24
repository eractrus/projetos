const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv')

const server = express();
server.use(cors());
dotenv.config();

const PORT = process.env.PORT || 3333;

//imports at routes
const dataWeb = require('../routes/dataWebRouter.js');

//routers
server.use('/active', dataWeb);

module.exports = {server, PORT}

