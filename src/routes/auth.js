const express = require('express');
const router = express.Router();
router.get('/login', (req,res) => res.render('login'));
module.exports = router;

router.post('/login', (req,res) => res.redirect('/'));
