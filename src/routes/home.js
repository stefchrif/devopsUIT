const express = require('express');
const router = express.Router();
const { db } = require('../db');

router.get('/', (req, res) => {
  const cat = req.query.cat;
  let query = 'SELECT products.*, categories.name as category_name FROM products LEFT JOIN categories ON products.category_id = categories.id';
  let params = [];
  
  if (cat) {
    query += ' WHERE category_id = ?';
    params.push(cat);
  }
  
  db.all(query, params, (err, products) => {
    if (err) products = [];
    res.render('home', { products, currentCat: cat });
  });
});

module.exports = router;
