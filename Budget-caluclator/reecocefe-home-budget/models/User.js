const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  adharcard: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pan: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  document: {
    type: DataTypes.BLOB('long'),
    allowNull: false,
  },
});

module.exports = User;
