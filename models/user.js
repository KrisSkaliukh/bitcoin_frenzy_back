const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.News, {
        foreignKey: 'userId',
        as: 'bitcoin',
      });
    }
  }
  User.init({
    name: DataTypes.STRING,
    count_money: DataTypes.NUMBER,
    count_bitcoins: DataTypes.NUMBER,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
