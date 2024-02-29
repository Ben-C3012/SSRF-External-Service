const app = require('./app');
const mongoose = require('mongoose');
const port = 3000;
const dotenv = require('dotenv').config();

// Connect to the database
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB, {
    }).then(() => {
    console.log('Database connected 💹');
    }).catch((err) => {
    console.log('Database connection error: ', err);
    });



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  })