const express = require('express');
const router = express.Router();
const { db } = require('../db');

router.get('/', (req, res) => {
  const cart = req.session.cart || [];
  res.render('cart', { cart });
});

router.get('/add/:id', (req, res) => {
  const id = req.params.id;
  db.get('SELECT * FROM products WHERE id = ?', [id], (err, product) => {
    if (!err && product) {
      if (!req.session.cart) req.session.cart = [];
      const existing = req.session.cart.find(item => item.id == id);
      if (existing) {
        existing.quantity += 1;
      } else {
        req.session.cart.push({ ...product, quantity: 1 });
      }
    }
    res.redirect('/cart');
  });
});

router.post('/checkout', (req, res) => {
  req.session.cart = [];
  res.send('<h1>Commande validée avec succès !</h1><a href="/">Retour à l\'accueil</a>');
});

module.exports = router;
