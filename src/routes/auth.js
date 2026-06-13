const express = require('express');
const router = express.Router();
const { db } = require('../db');

router.get('/login', (req, res) => {
  res.render('login', { error: null });
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  db.get('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, user) => {
    if (user) {
      req.session.user = user;
      if (user.role === 'admin') return res.redirect('/admin');
      return res.redirect('/');
    }
    res.render('login', { error: 'Identifiants invalides' });
  });
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;
