const express = require('express');
const router = express.Router();
const { db } = require('../db');

router.use((req, res, next) => {
  if (!req.session.user || req.session.user.role !== 'admin') {
    return res.redirect('/auth/login');
  }
  next();
});

router.get('/', (req, res) => {
  res.render('admin/dashboard');
});

router.get('/products', (req, res) => {
  db.all('SELECT products.*, categories.name as category_name FROM products LEFT JOIN categories ON products.category_id = categories.id', [], (err, products) => {
    res.render('admin/products', { products: products || [] });
  });
});

router.get('/categories', (req, res) => {
  db.all('SELECT * FROM categories', [], (err, categories) => {
    res.render('admin/categories', { categories: categories || [] });
  });
});

module.exports = router;
