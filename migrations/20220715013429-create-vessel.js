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
        allowNull: false,
        type: Sequelize.STRING
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      productionYear: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING
      },
      fuelTank1: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      fuelTank2: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      fuelTank3: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      fuelTank4: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      fuelTank5: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      fuelTank6: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      fuelTank7: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      fuelTank8: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      rpm: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      rpmLeft: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      rpmRight: {
        allowNull: false,
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