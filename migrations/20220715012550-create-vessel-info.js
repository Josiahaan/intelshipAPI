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
        type: Sequelize.INTEGER
      },
      gpsEarly: {
        type: Sequelize.DATE
      },
      gpsLastest: {
        type: Sequelize.DATE
      },
      averageFuel: {
        type: Sequelize.INTEGER
      },
      rpmLeftH: {
        type: Sequelize.INTEGER
      },
      rpmLeftM: {
        type: Sequelize.INTEGER
      },
      rpmRightH: {
        type: Sequelize.INTEGER
      },
      rpmRightM: {
        type: Sequelize.INTEGER
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