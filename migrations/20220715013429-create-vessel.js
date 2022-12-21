'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Vessels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      imei: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      productionYear: {
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING
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
      rpm: {
        type: Sequelize.FLOAT
      },
      rpmLeft: {
        type: Sequelize.FLOAT
      },
      rpmRight: {
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
    await queryInterface.dropTable('Vessels');
  }
};