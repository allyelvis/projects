require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const healthCenterRoutes = require('./routes/healthCenterRoutes');
const schoolRoutes = require('./routes/schoolRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/api/health-center', healthCenterRoutes);
app.use('/api/school', schoolRoutes);

const PORT = process.env.PORT || 3000;
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
