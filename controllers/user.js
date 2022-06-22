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
      const moneyCount = money.count_money;
      return res.status(201).send({ moneyCount });
    }
    return (error) => res.status(400).send(error.message);
  },
  async getUserBitcoins(req, res) {
    const bitcoins = await User.findOne(
      {
        attribute: ['count_bitcoins'],
      },
      {
        where: { id: 1 },
      },
    );
    if (bitcoins) {
      const bitcoinsCount = bitcoins.count_bitcoins;
      return res.status(201).send({ bitcoinsCount });
    }
    return (error) => res.status(400).send(error.message);
  },
};
