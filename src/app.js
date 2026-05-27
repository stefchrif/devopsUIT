const express = require('express');
const app = express();
module.exports = app;

app.set('view engine', 'ejs');

app.use('/', require('./routes/home'));

app.use('/catalog', require('./routes/catalog'));

app.use('/cart', require('./routes/cart'));
