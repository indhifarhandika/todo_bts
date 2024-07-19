const express = require('express');
const { createItem, getItems, deleteItem, updateItem, updateItemStatus, getItem } = require('../controllers/itemController');
const authenticateToken = require('../middleware/auth');

const router = express.Router();

router.post('/:checklistId/item', authenticateToken, createItem);
router.get('/:checklistId/item', authenticateToken, getItems);
router.get('/:checklistId/item/:itemId', authenticateToken, getItem);
router.delete('/:checklistId/item/:itemId', authenticateToken, deleteItem);
router.put('/:checklistId/item/rename/:itemId', authenticateToken, updateItem);
router.put('/:checklistId/item/:itemId', authenticateToken, updateItemStatus);

module.exports = router;
