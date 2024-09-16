const express = require('express');
const { getCategories, createCategory, getCategoryById, updateCategory, deleteCategory } = require('../controllers/categoriaController');

const router = express.Router();

router.get('/', getCategories);
router.post('/', createCategory);
router.get('/:id', getCategoryById);
router.put('/:id', updateCategory);
router.delete('/:id', deleteCategory);

module.exports = router;