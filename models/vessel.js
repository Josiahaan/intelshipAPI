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
    imei: DataTypes.STRING,
    name: DataTypes.STRING,
    productionYear: DataTypes.INTEGER,
    username: DataTypes.STRING,
    fuelTank1: DataTypes.FLOAT,
    fuelTank2: DataTypes.FLOAT,
    fuelTank3: DataTypes.FLOAT,
    fuelTank4: DataTypes.FLOAT,
    fuelTank5: DataTypes.FLOAT,
    fuelTank6: DataTypes.FLOAT,
    fuelTank7: DataTypes.FLOAT,
    fuelTank8: DataTypes.FLOAT,
    rpm: DataTypes.INTEGER,
    rpmLeft: DataTypes.INTEGER,
    rpmRight: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Vessel',
  });
  return Vessel;
};