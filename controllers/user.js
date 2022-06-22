const { User } = require('../models');

module.exports = {
  async getUserMoney(req, res) {
    const money = await User.findOne(
      {
        attribute: ['count_money'],
      },
      {
        where: { id: 1 },
      },
    );
    if (money) {
      return res.status(201).send(money);
    }
    return (error) => res.status(400).send(error.message);
  },
};
