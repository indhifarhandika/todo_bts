const Item = require('../models/Item');

const createItem = async (req, res) => {
    const { checklistId } = req.params;
    const { itemName } = req.body;
    try {
        await Item.createItem(checklistId, itemName);
        res.status(201).send('Item created');
    } catch (error) {
        res.status(400).send('Error creating item');
    }
};
// Get All items by checklist_id
const getItems = async (req, res) => {
    const { checklistId } = req.params;
    try {
        const items = await Item.getItemsByChecklist(checklistId);
        res.json(items);
    } catch (error) {
        res.status(400).send('Error fetching items');
    }
};
// Get one data items
const getItem = async (req, res) => {
    const { itemId, checklistId } = req.params;
    try {
        const item = await Item.getItemByIdAndChecklistId(itemId, checklistId);
        if (item) {
            res.json(item);
        } else {
            res.status(404).send('Item not found');
        }
    } catch (error) {
        res.status(400).send('Error fetching item');
    }
};

const deleteItem = async (req, res) => {
    const { checklistId, itemId } = req.params;
    try {
        await Item.deleteItem(itemId, checklistId);
        res.send('Item deleted');
    } catch (error) {
        res.status(400).send('Error deleting item');
    }
};

const updateItem = async (req, res) => {
    const { checklistId, itemId } = req.params;
    const { itemName } = req.body;
    try {
        await Item.updateItem(itemId, checklistId, itemName);
        res.send('Item updated');
    } catch (error) {
        res.status(400).send('Error updating item');
    }
};

const updateItemStatus = async (req, res) => {
    const { checklistId, itemId } = req.params;
    try {
      const item = await Item.getItemByIdAndChecklistId(itemId, checklistId);
      if (item) {
        const newStatus = !item.completed; // Toggle status
        await Item.updateItemStatus(itemId, checklistId, newStatus);
        res.send(`Item status updated to ${newStatus ? 'completed' : 'not completed'}`);
      } else {
        res.status(404).send('Item not found');
      }
    } catch (error) {
      res.status(400).send('Error updating item status');
    }
  };

module.exports = { createItem, getItems, getItem, deleteItem, updateItem, updateItemStatus };
