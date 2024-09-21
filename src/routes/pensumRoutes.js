const express = require('express');
const { getPensums, createPensum, getPensumById, updatePensum, deletePensum } = require('../controllers/pensumController');

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Pensum:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: ID auto-generado del pensum
 *         titulo:
 *           type: string
 *           description: Título del pensum
 *         descripcion:
 *           type: string
 *           description: Descripción del pensum
 *         url_documento:
 *           type: string
 *           description: URL del documento relacionado al pensum
 *       example:
 *         id: 1
 *         titulo: "Pensum 2024"
 *         descripcion: "Pensom 2024 para tecnico en desarrollo de software"
 *         url_documento: "http://example.com/documento.pdf"
 */

/**
 * @swagger
 * tags:
 *   name: Pensums
 *   description: API endpoints for managing pensums
 */

/**
 * @swagger
 * /api/pensums:
 *   get:
 *     summary: Get all pensums
 *     tags: [Pensums]
 *     responses:
 *       200:
 *         description: A list of pensums
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pensum'
 *       500:
 *         description: Server error
 */
router.get('/', getPensums);

/**
 * @swagger
 * /api/pensums:
 *   post:
 *     summary: Create a new pensum
 *     tags: [Pensums]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *               descripcion:
 *                 type: string
 *               url_documento:
 *                 type: string
 *     responses:
 *       201:
 *         description: The created pensum
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pensum'
 *       500:
 *         description: Server error
 */
router.post('/', createPensum);

/**
 * @swagger
 * /api/pensums/{id}:
 *   get:
 *     summary: Get a pensum by ID
 *     tags: [Pensums]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the pensum
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: The requested pensum
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pensum'
 *       404:
 *         description: Pensum not found
 *       500:
 *         description: Server error
 */
router.get('/:id', getPensumById);

/**
 * @swagger
 * /api/pensums/{id}:
 *   put:
 *     summary: Update a pensum by ID
 *     tags: [Pensums]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the pensum to update
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *               descripcion:
 *                 type: string
 *               url_documento:
 *                 type: string
 *     responses:
 *       200:
 *         description: The updated pensum
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pensum'
 *       404:
 *         description: Pensum not found
 *       500:
 *         description: Server error
 */
router.put('/:id', updatePensum);

/**
 * @swagger
 * /api/pensums/{id}:
 *   delete:
 *     summary: Delete a pensum by ID
 *     tags: [Pensums]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the pensum to delete
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Success message
 *       404:
 *         description: Pensum not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', deletePensum);

module.exports = router;
