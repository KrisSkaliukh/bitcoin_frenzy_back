const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Bitcoin extends Model {
    static associate(models) {
      Bitcoin.belongsTo(models.User, { foreignKey: 'id' });
    }
  }
  Bitcoin.init({
    bitcoin_price: DataTypes.NUMBER,
    userId: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Bitcoin',
  });
  return Bitcoin;
};
