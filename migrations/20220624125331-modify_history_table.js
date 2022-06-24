module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Histories',
        'date',
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
      ),
      queryInterface.addColumn(
        'Histories',
        'histId',
        {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
      ),
    ]);
  },

  down(queryInterface) {
    return Promise.all([
      queryInterface.removeColumn('Histories', 'date'),
      queryInterface.removeColumn('Histories', 'histId'),
    ]);
  },
};
