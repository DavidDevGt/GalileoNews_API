const express = require('express');
const { getPensums, createPensum, getPensumById, updatePensum, deletePensum } = require('../controllers/pensumController');

const router = express.Router();

router.get('/', getPensums);
router.get('/:id', getPensumById);
router.post('/', createPensum);
router.put('/:id', updatePensum);
router.delete('/:id', deletePensum);

module.exports = router;