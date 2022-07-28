'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vessel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Vessel.init({
    imei: DataTypes.INTEGER,
    name: DataTypes.STRING,
    productionYear: DataTypes.INTEGER,
    username: DataTypes.STRING,
    fueltank1: DataTypes.STRING,
    fuelTank2: DataTypes.STRING,
    fuelTank3: DataTypes.STRING,
    fuelTank4: DataTypes.STRING,
    fuelTank5: DataTypes.STRING,
    fuelTank6: DataTypes.STRING,
    fuelTank7: DataTypes.STRING,
    fuelTank8: DataTypes.STRING,
    rpm: DataTypes.INTEGER,
    rpmLeft: DataTypes.INTEGER,
    rpmRight: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Vessel',
  });
  return Vessel;
};