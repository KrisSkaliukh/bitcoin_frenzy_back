/* eslint-disable no-unused-vars */

module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([queryInterface.addColumn(
      'Users',
      'password',
      Sequelize.STRING,
    ),
    queryInterface.addColumn(
      'Users',
      'email',
      Sequelize.STRING,
    ),
    queryInterface.addColumn(
      'Users',
      'avatar',
      Sequelize.STRING,
    )]);
  },

  down(queryInterface, Sequelize) {
    // logic for reverting the changes
    return Promise.all([
      queryInterface.removeColumn('Users', 'password'),
      queryInterface.removeColumn('Users', 'email'),
      queryInterface.removeColumn('Users', 'avatar'),
    ]);
  },
};
