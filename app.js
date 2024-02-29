const express = require('express');
const app = express();
const fs = require('fs');
const morgan = require('morgan');

const userRouter = require('./routes/userRoutes');
const companyRouter = require('./routes/companyRoutes');

// 1) MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json()); // middleware to parse the body of the request



// 2) ROUTES
  app.use('/users', userRouter);
  app.use('/companies', companyRouter);





  module.exports = app;