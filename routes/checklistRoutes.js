// routes/checklistRoutes.js
const express = require('express');
const { createChecklist, getChecklists, deleteChecklist } = require('../controllers/checklistController');
const authenticateToken = require('../middleware/auth');

const router = express.Router();

router.post('/', authenticateToken, createChecklist);
router.get('/', authenticateToken, getChecklists);
router.delete('/:checklistId', authenticateToken, deleteChecklist);

module.exports = router;
