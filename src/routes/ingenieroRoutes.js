const express = require('express');
const { getEngineers, createEngineer, getEngineerById, updateEngineer, deleteEngineer } = require('../controllers/ingenieroController');

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Ingeniero:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated ID of the engineer
 *         nombre:
 *           type: string
 *           description: The name of the role
 *         email:
 *           type: string
 *           description: The email of the engineer
 *       example:
 *         id: 1
 *         nombre: Erick
 *         email: ingerickdev@gmail.com
 */

/**
 * @swagger
 * tags:
 *   name: Ingenieros
 *   description: API endpoints for managing ingenieros
 */

/**
 * @swagger
 * /api/ingenieros:
 *   get:
 *     summary: Retrieve a list of engineers
 *     tags: [Ingenieros]
 *     responses:
 *       200:
 *         description: List of engineers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Ingeniero'
 *       500:
 *         description: Error fetching engineers
 */
router.get('/', getEngineers);

/**
 * @swagger
 * /api/ingeniero:
 *   post:
 *     summary: Create a new role
 *     tags: [Ingenieros]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Ingenieros'
 *     responses:
 *       201:
 *         description: The created engineer
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Ingenieros'
 *       500:
 *         description: Error creating engineer
 */
router.post('/', createEngineer);

/**
 * @swagger
 * /api/ingenieros/{id}:
 *   get:
 *     summary: Get an engineer by ID
 *     tags: [Ingenieros]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the engineer
 *     responses:
 *       200:
 *         description: The engineer details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Ingeniero'
 *       404:
 *         description: Engineer not found
 *       500:
 *         description: Error retrieving egineer
 */
router.get('/:id', getEngineerById);

/**
 * @swagger
 * /api/ingenieros/{id}:
 *   put:
 *     summary: Update an engineer by ID
 *     tags: [Ingenieros]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the engineer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Ingeniero'
 *     responses:
 *       200:
 *         description: The updated engineer
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Ingeniero'
 *       404:
 *         description: Engineer not found
 *       500:
 *         description: Error updating engineer
 */
router.put('/:id', updateEngineer);

/**
 * @swagger
 * /api/ingenieros/{id}:
 *   delete:
 *     summary: Delete an engineer by ID
 *     tags: [Ingenieros]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the engineer
 *     responses:
 *       200:
 *         description: Engineer deleted successfully
 *       404:
 *         description: Engineer not found
 *       500:
 *         description: Error deleting engineer
 */
router.delete('/:id', deleteEngineer);

module.exports = router;
