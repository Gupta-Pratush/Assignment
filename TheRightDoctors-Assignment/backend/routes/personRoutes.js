const express = require('express');
const personController = require('../controllers/personController');

const router = express.Router();

router.get('/', personController.getPerson);
router.put('/:id', personController.updatePerson);
router.delete('/:id', personController.deletePerson);
router.post('/', personController.createPerson);

module.exports = router;