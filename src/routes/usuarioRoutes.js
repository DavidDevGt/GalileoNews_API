const express = require("express");
const {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/usuarioController");

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Usuario:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated ID of the user
 *         email:
 *           type: string
 *           description: The email of the user
 *         username:
 *           type: string
 *           description: The username of the user
 *         password:
 *           type: string
 *           description: The password of the user
 *         rol_id:
 *           type: integer
 *           description: The ID of the associated role
 *       example:
 *         id: 1
 *         email: user@example.com
 *         username: johndoe
 *         password: password123
 *         rol_id: 2
 */

/**
 * @swagger
 * tags:
 *   name: Usuarios
 *   description: API endpoints for managing users
 */

/**
 * @swagger
 * /api/usuarios:
 *   get:
 *     summary: Retrieve a list of users
 *     tags: [Usuarios]
 *     responses:
 *       200:
 *         description: List of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Usuario'
 *       500:
 *         description: Server error
 */
router.get("/", getUsers);

/**
 * @swagger
 * /api/usuarios/{id}:
 *   get:
 *     summary: Retrieve a user by ID
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The user ID
 *     responses:
 *       200:
 *         description: User data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */
router.get("/:id", getUserById);

/**
 * @swagger
 * /api/usuarios/{id}:
 *   put:
 *     summary: Update a user by ID
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The user ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuario'
 *     responses:
 *       200:
 *         description: The updated user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */
router.put("/:id", updateUser);

/**
 * @swagger
 * /api/usuarios/{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The user ID
 *     responses:
 *       200:
 *         description: User deleted
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */
router.delete("/:id", deleteUser);

module.exports = router;
