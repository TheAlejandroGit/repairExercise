const { DataTypes } = require("sequelize");
const { sequelize } = require("../utils/database");

//instanciar modelo
const Repair = sequelize.define("repair", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  date: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  status: {
    type: DataTypes.STRING,
    defaultValue: "pending",
  },

  userId: {
    type: DataTypes.INTEGER,
    type: DataTypes.STRING,
  },
});

module.export = { Repair };
