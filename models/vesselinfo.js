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
      VesselInfo.belongsTo(models.Vessel, { targetKey: 'imei', foreignKey: 'imei' })
    }
  }
  VesselInfo.init({
    imei: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull:{
          msg: "imei is required"
        },
        notEmpty: {
          msg: "imei is required"
        },
      },
      references: {
        model: {
          tableName: "Vessels"
        },
        key: "imei"
      },
    },
    deviceId: DataTypes.STRING,
    statusPower: DataTypes.FLOAT,
    statusSignal: DataTypes.FLOAT,
    fuelTank1: DataTypes.FLOAT,
    fuelTank2: DataTypes.FLOAT,
    fuelTank3: DataTypes.FLOAT,
    fuelTank4: DataTypes.FLOAT,
    fuelTank5: DataTypes.FLOAT,
    fuelTank6: DataTypes.FLOAT,
    fuelTank7: DataTypes.FLOAT,
    fuelTank8: DataTypes.FLOAT,
    RPM1: DataTypes.FLOAT,
    RPM2: DataTypes.FLOAT,
    date: DataTypes.FLOAT,
    time: DataTypes.FLOAT,
    latitude: DataTypes.FLOAT,
    NSIndicator: DataTypes.STRING,
    longitude: DataTypes.FLOAT,
    EWIndicator: DataTypes.STRING,
    speed: DataTypes.FLOAT,
    pitch: DataTypes.FLOAT,
    roll: DataTypes.FLOAT,
    DFM1: DataTypes.FLOAT,
    DFM2: DataTypes.FLOAT,
  }, {
    sequelize,
    modelName: 'VesselInfo',
  });
  return VesselInfo;
};