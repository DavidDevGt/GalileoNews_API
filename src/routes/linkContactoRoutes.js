const express = require('express');
const { getLinkContactos, createLinkContacto, getLinkContactoById, updateLinkContacto, deleteLinkContacto } = require('../controllers/linkContactoController');

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     LinkContacto:
 *       type: object
 *       required:
 *         - titulo
 *         - descripcion
 *         - tipo
 *       properties:
 *         id:
 *           type: integer
 *           description: Auto-generated ID of the linkContacto
 *         titulo:
 *           type: string
 *           description: Title of the link
 *         descripcion:
 *           type: string
 *           description: Description of the linkContacto
 *         tipo:
 *           type: string
 *           description: Type of the link (e.g., 'Noticia', 'Ingeniero')
 *         noticia_evento_id:
 *           type: integer
 *           description: ID of the related NoticiaEvento
 *         ingeniero_id:
 *           type: integer
 *           description: ID of the related Ingeniero
 *         pensum_id:
 *           type: integer
 *           description: ID of the related Pensum
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Date when the linkContacto was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Date when the linkContacto was last updated
 *       example:
 *         id: 1
 *         titulo: "Contacto Ingeniero 1"
 *         descripcion: "Información de contacto del ingeniero."
 *         tipo: "Ingeniero"
 *         noticia_evento_id: 5
 *         ingeniero_id: 3
 *         pensum_id: 2
 *         createdAt: "2023-01-01T12:00:00Z"
 *         updatedAt: "2023-01-01T12:00:00Z"
 */

/**
 * @swagger
 * tags:
 *   name: LinkContactos
 *   description: API endpoints for managing LinkContactos
 */

/**
 * @swagger
 * /linkContactos:
 *   get:
 *     summary: Get all LinkContactos
 *     tags: [LinkContactos]
 *     responses:
 *       200:
 *         description: List of all LinkContactos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/LinkContacto'
 */
router.get('/', getLinkContactos);

/**
 * @swagger
 * /linkContactos/{id}:
 *   get:
 *     summary: Get a LinkContacto by ID
 *     tags: [LinkContactos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the LinkContacto
 *     responses:
 *       200:
 *         description: The LinkContacto with the specified ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LinkContacto'
 *       404:
 *         description: LinkContacto not found
 */
router.get('/:id', getLinkContactoById);

/**
 * @swagger
 * /linkContactos:
 *   post:
 *     summary: Create a new LinkContacto
 *     tags: [LinkContactos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LinkContacto'
 *     responses:
 *       201:
 *         description: The LinkContacto was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LinkContacto'
 *       400:
 *         description: Error creating the LinkContacto
 */
router.post('/', createLinkContacto);

/**
 * @swagger
 * /linkContactos/{id}:
 *   put:
 *     summary: Update a LinkContacto by ID
 *     tags: [LinkContactos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the LinkContacto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LinkContacto'
 *     responses:
 *       200:
 *         description: The updated LinkContacto
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LinkContacto'
 *       404:
 *         description: LinkContacto not found
 *       400:
 *         description: Error updating the LinkContacto
 */
router.put('/:id', updateLinkContacto);

/**
 * @swagger
 * /linkContactos/{id}:
 *   delete:
 *     summary: Delete a LinkContacto by ID
 *     tags: [LinkContactos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the LinkContacto
 *     responses:
 *       200:
 *         description: LinkContacto successfully deleted
 *       404:
 *         description: LinkContacto not found
 */
router.delete('/:id', deleteLinkContacto);

module.exports = router;
