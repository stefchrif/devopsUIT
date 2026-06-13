const express = require('express');
const router = express.Router();
const { db } = require('../db');

router.get('/:id', (req, res) => {
  db.get('SELECT products.*, categories.name as category_name FROM products LEFT JOIN categories ON products.category_id = categories.id WHERE products.id = ?', [req.params.id], (err, product) => {
    if (err || !product) return res.redirect('/');
    res.render('product', { p: product });
  });
});

module.exports = router;
