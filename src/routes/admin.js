const express = require('express');
const router = express.Router();
router.get('/', (req,res) => res.render('admin/dashboard'));
module.exports = router;

router.get('/products', (req,res) => res.render('admin/products'));

router.get('/categories', (req,res) => res.render('admin/categories'));
