'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('VesselInfos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      imei: {
        type: Sequelize.STRING,
        references: {
          model: {
            tableName: "Vessels",
          },
          key: "imei",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      deviceId: {
        type: Sequelize.STRING
      },
      statusPower: {
        type: Sequelize.FLOAT
      },
      statusSignal: {
        type: Sequelize.FLOAT
      },
      fuelTank1: {
        type: Sequelize.FLOAT
      },
      fuelTank2: {
        type: Sequelize.FLOAT
      },
      fuelTank3: {
        type: Sequelize.FLOAT
      },
      fuelTank4: {
        type: Sequelize.FLOAT
      },
      fuelTank5: {
        type: Sequelize.FLOAT
      },
      fuelTank6: {
        type: Sequelize.FLOAT
      },
      fuelTank7: {
        type: Sequelize.FLOAT
      },
      fuelTank8: {
        type: Sequelize.FLOAT
      },
      RPM1: {
        type: Sequelize.FLOAT
      },
      RPM2: {
        type: Sequelize.FLOAT
      },
      date: {
        type: Sequelize.FLOAT
      },
      time: {
        type: Sequelize.FLOAT
      },
      latitude: {
        type: Sequelize.FLOAT
      },
      NSIndicator: {
        type: Sequelize.STRING
      },
      longitude: {
        type: Sequelize.FLOAT
      },
      EWIndicator: {
        type: Sequelize.STRING
      },
      speed: {
        type: Sequelize.FLOAT
      },
      pitch: {
        type: Sequelize.FLOAT
      },
      roll: {
        type: Sequelize.FLOAT
      },
      DFM1: {
        type: Sequelize.FLOAT
      },
      DFM2: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('VesselInfos');
  }
};