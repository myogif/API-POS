const express = require('express');
const router = express.Router();
const categoryController = require('../controller/categories.controller');

router.post('/api/v1/categories', categoryController.addCategory);
router.get('/api/v1/categories', categoryController.getCategory);
router.put('/api/v1/categories/:id', categoryController.updateCategory);
router.delete('/api/v1/categories/:id', categoryController.deleteCategory);

module.exports = router;
