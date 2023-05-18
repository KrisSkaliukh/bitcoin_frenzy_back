const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    static associate(/* models */) {
    }
  }
  History.init({
    text_history: DataTypes.STRING,
    date: DataTypes.STRING,
    histId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'History',
  });
  return History;
};
