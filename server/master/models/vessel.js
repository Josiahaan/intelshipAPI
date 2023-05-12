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
      Vessel.hasMany(models.VesselTank, { foreignKey: 'vesselId' })
    }
  }
  Vessel.init({
    name: DataTypes.STRING,
    vesselNumber: DataTypes.INTEGER,
    phone: DataTypes.STRING,
    imei: DataTypes.STRING,
    productionYear: DataTypes.INTEGER,
    deviceid: DataTypes.STRING,
    fueltank1: DataTypes.FLOAT,
    fueltank2: DataTypes.FLOAT,
    fueltank3: DataTypes.FLOAT,
    fueltank4: DataTypes.FLOAT,
    fueltank5: DataTypes.FLOAT,
    fueltank6: DataTypes.FLOAT,
    fueltank7: DataTypes.FLOAT,
    fueltank8: DataTypes.FLOAT,
    RPM1: DataTypes.FLOAT,
    RPM2: DataTypes.FLOAT,
    DFM1: DataTypes.FLOAT,
    DFM2: DataTypes.FLOAT,
    companyId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Vessel',
  });
  return Vessel;
};