const express = require('express');
const router = express.Router();
const { db } = require('../db');

router.get('/', (req, res) => {
  db.all('SELECT * FROM products', [], (err, products) => {
    if (err) products = [];
    res.render('home', { products });
  });
});

module.exports = router;
