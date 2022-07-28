'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class VesselInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  VesselInfo.init({
    imei: DataTypes.INTEGER,
    gpsEarly: DataTypes.DATE,
    gpsLastest: DataTypes.DATE,
    averageFuel: DataTypes.INTEGER,
    rpmLeftH: DataTypes.INTEGER,
    rpmLeftM: DataTypes.INTEGER,
    rpmRightH: DataTypes.INTEGER,
    rpmRightM: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'VesselInfo',
  });
  return VesselInfo;
};