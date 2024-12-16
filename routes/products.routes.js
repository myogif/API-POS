const express = require('express');
const router = express.Router();
const productController = require('../controller/products.controller');

router.post('/api/v1/products', productController.addProduct);
router.get('/api/v1/products', productController.getAllProducts);
router.get('/api/v1/product/:id', productController.getProductByID);
router.put('/api/v1/products/:id', productController.updateProduct);
router.delete('/api/v1/products/:id', productController.deleteProduct);

module.exports = router;
