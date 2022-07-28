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
        type: Sequelize.INTEGER
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
      fueltank1: {
        type: Sequelize.STRING
      },
      fuelTank2: {
        type: Sequelize.STRING
      },
      fuelTank3: {
        type: Sequelize.STRING
      },
      fuelTank4: {
        type: Sequelize.STRING
      },
      fuelTank5: {
        type: Sequelize.STRING
      },
      fuelTank6: {
        type: Sequelize.STRING
      },
      fuelTank7: {
        type: Sequelize.STRING
      },
      fuelTank8: {
        type: Sequelize.STRING
      },
      rpm: {
        type: Sequelize.INTEGER
      },
      rpmLeft: {
        type: Sequelize.INTEGER
      },
      rpmRight: {
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
    await queryInterface.dropTable('Vessels');
  }
};