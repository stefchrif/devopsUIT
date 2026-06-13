const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', require('./routes/home'));
app.use('/catalog', require('./routes/catalog'));
app.use('/cart', require('./routes/cart'));
app.use('/auth', require('./routes/auth'));
app.use('/admin', require('./routes/admin'));

module.exports = app;
