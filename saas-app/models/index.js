const Sequelize = require('sequelize');
const config = require('../config/config.js')['development'];

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models
db.Patient = require('./patient')(sequelize, Sequelize);
db.Student = require('./student')(sequelize, Sequelize);
db.Teacher = require('./teacher')(sequelize, Sequelize);
db.Appointment = require('./appointment')(sequelize, Sequelize);

module.exports = db;
