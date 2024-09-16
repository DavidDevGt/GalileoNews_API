const express = require('express');
const { getRoles, createRol, getRolById, updateRol, deleteRol } = require('../controllers/rolController');

const router = express.Router();

router.get('/', getRoles);
router.post('/', createRol);
router.get('/:id', getRolById);
router.put('/:id', updateRol);
router.delete('/:id', deleteRol);

module.exports = router;