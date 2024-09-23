const express = require('express');
const { getRoles, createRol, getRolById, updateRol, deleteRol } = require('../controllers/rolController');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Rol:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated ID of the role
 *         nombre:
 *           type: string
 *           description: The name of the role
 *         descripcion:
 *           type: string
 *           description: A brief description of the role
 *       example:
 *         id: 1
 *         nombre: Admin
 *         descripcion: Administrator with full permissions
 */

/**
 * @swagger
 * tags:
 *   name: Roles
 *   description: API endpoints for managing roles
 */

/**
 * @swagger
 * /api/roles:
 *   get:
 *     summary: Retrieve a list of roles
 *     tags: [Roles]
 *     responses:
 *       200:
 *         description: List of roles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Rol'
 *       500:
 *         description: Error fetching roles
 */
router.get('/', getRoles);

/**
 * @swagger
 * /api/roles:
 *   post:
 *     summary: Create a new role
 *     tags: [Roles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Rol'
 *     responses:
 *       201:
 *         description: The created role
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Rol'
 *       500:
 *         description: Error creating role
 */
router.post('/', createRol);

/**
 * @swagger
 * /api/roles/{id}:
 *   get:
 *     summary: Get a role by ID
 *     tags: [Roles]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the role
 *     responses:
 *       200:
 *         description: The role details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Rol'
 *       404:
 *         description: Role not found
 *       500:
 *         description: Error retrieving role
 */
router.get('/:id', getRolById);

/**
 * @swagger
 * /api/roles/{id}:
 *   put:
 *     summary: Update a role by ID
 *     tags: [Roles]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the role
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Rol'
 *     responses:
 *       200:
 *         description: The updated role
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Rol'
 *       404:
 *         description: Role not found
 *       500:
 *         description: Error updating role
 */
router.put('/:id', updateRol);

/**
 * @swagger
 * /api/roles/{id}:
 *   delete:
 *     summary: Delete a role by ID
 *     tags: [Roles]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the role
 *     responses:
 *       200:
 *         description: Role deleted successfully
 *       404:
 *         description: Role not found
 *       500:
 *         description: Error deleting role
 */
router.delete('/:id', deleteRol);

module.exports = router;
