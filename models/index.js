const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const config = require('../config.js');

const sequelize = new Sequelize(config.database, config.login, config.password, {
  host: config.hostname,
  port: config.port,
  dialect: config.type,
  pool: {
    max: 5, // 5 is the max #
    min: 0,  // min is zero
    idle: 10000,
  },
});

const db = {};

fs
  .readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== 'index.js'))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
