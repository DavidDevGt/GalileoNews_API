const express = require('express');
const { getNoticiaEventos, createNoticiaEvento, getNoticiaEventoById, updateNoticiaEvento, deleteNoticiaEvento } = require('../controllers/noticiaEventoController');

const router = express.Router();

router.get('/', getNoticiaEventos);
router.get('/:id', getNoticiaEventoById);
router.post('/', createNoticiaEvento);
router.put('/:id', updateNoticiaEvento);
router.delete('/:id', deleteNoticiaEvento);

module.exports = router;