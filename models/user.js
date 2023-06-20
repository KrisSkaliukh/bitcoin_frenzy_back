const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Bitcoin, {
        foreignKey: 'userId',
        as: 'bitcoin',
      });
    }
  }
  User.init({
    name: DataTypes.STRING,
    count_money: DataTypes.NUMBER,
    count_bitcoins: DataTypes.NUMBER,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    avatar: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
