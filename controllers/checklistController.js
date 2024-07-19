// controllers/checklistController.js
const Checklist = require('../models/Checklist');

const createChecklist = async (req, res) => {
  const { name } = req.body;
  const userId = req.user.id;
  console.log(userId)
  try {
    await Checklist.createChecklist(userId, name);
    res.status(201).send('Checklist created');
  } catch (error) {
    console.log(error)
    res.status(400).send('Error creating checklist');
  }
};

const getChecklists = async (req, res) => {
  const userId = req.user.id;
  try {
    const checklists = await Checklist.getChecklistsByUser(userId);
    res.json(checklists);
  } catch (error) {
    res.status(400).send('Error fetching checklists');
  }
};

const deleteChecklist = async (req, res) => {
  const { checklistId } = req.params;
  const userId = req.user.id;
  try {
    await Checklist.deleteChecklist(checklistId, userId);
    res.send('Checklist deleted');
  } catch (error) {
    res.status(400).send('Error deleting checklist');
  }
};

module.exports = { createChecklist, getChecklists, deleteChecklist };
