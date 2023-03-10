const express = require('express');
const createError = require('http-errors');
const logger = require('morgan');
const path = require('path');
const hbs = require('hbs');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
require('dotenv').config();
const fetch = require('node-fetch');


const app = express();
const PORT =  3002;



app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

  app.options('*', (req, res) => {
    res.status(200).end();
  });

app.get('/data', async (req, res) => {
    try {
      const response = await fetch('https://data.ifiniti.co/ifc/ed348259-5864-440b-a4c5-523657361ede.json');
      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  });












app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
})