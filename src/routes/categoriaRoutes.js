const express = require('express');
const { getCategories, createCategory, getCategoryById, updateCategory, deleteCategory } = require('../controllers/categoriaController');

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Categoria:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated ID of the category
 *         nombre:
 *           type: string
 *           description: The name of the category
 *       example:
 *         id: 1
 *         nombre: Categoria x
 *         descripcion: Descripcion de categoria
 */

/**
 * @swagger
 * tags:
 *   name: Categorias
 *   description: API endpoints for managing categories
 */

/**
 * @swagger
 * /api/categorias:
 *   get:
 *     summary: Retrieve a list of categories
 *     tags: [Categorias]
 *     responses:
 *       200:
 *         description: List of categories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Categoria'
 *       500:
 *         description: Error fetching categories
 */
router.get('/', getCategories);

/**
 * @swagger
 * /api/categorias:
 *   post:
 *     summary: Create a new categories
 *     tags: [Categorias]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Categoria'
 *     responses:
 *       201:
 *         description: The created category
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Categoria'
 *       500:
 *         description: Error creating category
 */
router.post('/', createCategory);

/**
 * @swagger
 * /api/categorias/{id}:
 *   get:
 *     summary: Get a category by ID
 *     tags: [Categorias]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the category
 *     responses:
 *       200:
 *         description: The category details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Categoria'
 *       404:
 *         description: Category not found
 *       500:
 *         description: Error retrieving category
 */
router.get('/:id', getCategoryById);

/**
 * @swagger
 * /api/categorias/{id}:
 *   put:
 *     summary: Update a category by ID
 *     tags: [Categorias]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the category
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Categoria'
 *     responses:
 *       200:
 *         description: The updated category
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Categoria'
 *       404:
 *         description: Category not found
 *       500:
 *         description: Error updating category
 */
router.put('/:id', updateCategory);

/**
 * @swagger
 * /api/categorias/{id}:
 *   delete:
 *     summary: Delete a category by ID
 *     tags: [Categorias]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the category
 *     responses:
 *       200:
 *         description: Category deleted successfully
 *       404:
 *         description: Category not found
 *       500:
 *         description: Error deleting category
 */
router.delete('/:id', deleteCategory);

module.exports = router;