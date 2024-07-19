const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const db = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const checklistRoutes = require('./routes/checklistRoutes');
const itemRoutes = require('./routes/itemRoutes');

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.use('/api/checklists', checklistRoutes);
app.use('/api/checklists', itemRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT || 3000}`);
});

module.exports = db;
