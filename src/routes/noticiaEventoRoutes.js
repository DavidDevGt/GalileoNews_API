const express = require('express');
const {
  getNoticiaEventos,
  createNoticiaEvento,
  getNoticiaEventoById,
  updateNoticiaEvento,
  deleteNoticiaEvento,
} = require('../controllers/noticiaEventoController');

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     NoticiaEvento:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: ID auto-generado del evento
 *         titulo:
 *           type: string
 *           description: Título del evento o noticia
 *         descripcion:
 *           type: string
 *           description: Descripción del evento o noticia
 *         fecha:
 *           type: string
 *           format: date
 *           description: Fecha del evento o noticia
 *         categoria_id:
 *           type: integer
 *           description: ID de la categoría asociada al evento
 *       example:
 *         id: 1
 *         titulo: "Conferencia de Tecnología"
 *         descripcion: "Una conferencia sobre las últimas tendencias tecnológicas."
 *         fecha: "2024-01-01"
 *         categoria_id: 2
 */

/**
 * @swagger
 * tags:
 *   name: NoticiaEventos
 *   description: API para gestionar noticias y eventos
 */


/**
 * @swagger
 * /api/noticias-eventos:
 *   get:
 *     summary: Get all noticias y eventos
 *     tags: [NoticiaEventos]
 *     responses:
 *       200:
 *         description: Returns a list of all noticias y eventos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/NoticiaEvento'
 */
router.get('/', getNoticiaEventos);

/**
 * @swagger
 * /api/noticias-eventos/{id}:
 *   get:
 *     summary: Get noticia o evento by ID
 *     tags: [NoticiaEventos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the noticia o evento
 *     responses:
 *       200:
 *         description: Noticia o evento found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/NoticiaEvento'
 *       404:
 *         description: Noticia o evento not found
 */
router.get('/:id', getNoticiaEventoById);

/**
 * @swagger
 * /api/noticias-eventos:
 *   post:
 *     summary: Create a new noticia o evento
 *     tags: [NoticiaEventos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NoticiaEvento'
 *     responses:
 *       201:
 *         description: Noticia o evento created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/NoticiaEvento'
 *       500:
 *         description: Error creating noticia o evento
 */
router.post('/', createNoticiaEvento);

/**
 * @swagger
 * /api/noticias-eventos/{id}:
 *   put:
 *     summary: Update an existing noticia o evento
 *     tags: [NoticiaEventos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the noticia o evento to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NoticiaEvento'
 *     responses:
 *       200:
 *         description: Noticia o evento updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/NoticiaEvento'
 *       404:
 *         description: Noticia o evento not found
 */
router.put('/:id', updateNoticiaEvento);

/**
 * @swagger
 * /api/noticias-eventos/{id}:
 *   delete:
 *     summary: Delete an existing noticia o evento
 *     tags: [NoticiaEventos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the noticia o evento to delete
 *     responses:
 *       200:
 *         description: Noticia o evento deleted successfully
 *       404:
 *         description: Noticia o evento not found
 */
router.delete('/:id', deleteNoticiaEvento);

module.exports = router;
