const express = require('express');
const { getLinkContactos, createLinkContacto, getLinkContactoById, updateLinkContacto, deleteLinkContacto } = require('../controllers/linkContactoController');

const router = express.Router();

router.get('/', getLinkContactos);
router.get('/:id', getLinkContactoById);
router.post('/', createLinkContacto);
router.put('/:id', updateLinkContacto);
router.delete('/:id', deleteLinkContacto);

module.exports = router;