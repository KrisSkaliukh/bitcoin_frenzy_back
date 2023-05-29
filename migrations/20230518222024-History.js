/* eslint-disable no-unused-vars */

module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([queryInterface.addColumn(
      'Histories',
      'userId',
      Sequelize.INTEGER,
    )]);
  },

  down(queryInterface, Sequelize) {
    // logic for reverting the changes
    return Promise.all([
      queryInterface.removeColumn('Histories', 'userId'),
    ]);
  },
};
