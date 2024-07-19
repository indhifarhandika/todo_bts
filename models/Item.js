// models/Item.js
const db = require('../config/db');


class Item {
  static async createItem(checklistId, description) {
    return db('items').insert({ checklist_id: checklistId, description });
  }

  static async getItemsByChecklist(checklistId) {
    return db('items').where({ checklist_id: checklistId });
  }

  static async getItemByIdAndChecklistId(itemId, checklistId) {
    return db('items').where({ id: itemId, checklist_id: checklistId }).first();
  }

  static async deleteItem(itemId, checklistId) {
    return db('items').where({ id: itemId, checklist_id: checklistId }).del();
  }

  static async updateItemStatus(itemId, checklistId, completed) {
    return db('items').where({ id: itemId, checklist_id: checklistId }).update({ completed });
  }

  static async updateItemStatus(itemId, checklistId, completed) {
    return db('items').where({ id: itemId, checklist_id: checklistId }).update({ completed });
  }

  static async getItemByIdAndChecklistId(itemId, checklistId) {
    return db('items').where({ id: itemId, checklist_id: checklistId }).first();
  }
}

module.exports = Item;
