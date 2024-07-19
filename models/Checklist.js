// models/Checklist.js
const db = require('../config/db');


class Checklist {
  static async createChecklist(userId, title) {
    return db('checklists').insert({ user_id: userId, title });
  }

  static async getChecklistsByUser(userId) {
    return db('checklists').where({ user_id: userId });
  }

  static async deleteChecklist(checklistId, userId) {
    return db('checklists').where({ id: checklistId, user_id: userId }).del();
  }
}

module.exports = Checklist;
