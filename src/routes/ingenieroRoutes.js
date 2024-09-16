const express = require('express');
const { getEngineers, createEngineer, getEngineerById, updateEngineer, deleteEngineer } = require('../controllers/ingenieroController');

const router = express.Router();

router.get('/', getEngineers);
router.post('/', createEngineer);
router.get('/:id', getEngineerById);
router.put('/:id', updateEngineer);
router.delete('/:id', deleteEngineer);

module.exports = router;
