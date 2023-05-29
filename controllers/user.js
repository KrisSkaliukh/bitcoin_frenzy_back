const { User, Bitcoin } = require('../models');

module.exports = {
  async getUserMoney(req, res) {
    const { tokenVerify } = req;

    const money = await User.findOne({
      where: { id: tokenVerify.id },
      include: [{
        model: Bitcoin,
        as: 'bitcoin',
        required: false,
      }],
    });

    if (money) {
      return res.status(201).send({ count_money: money.count_money });
    }
    return (error) => res.status(400).send(error.message);
  },

  async getUserBitcoins(req, res) {
    const { tokenVerify } = req;

    const bitcoins = await User.findOne({
      where: { id: tokenVerify.id },
      include: [{
        model: Bitcoin,
        as: 'bitcoin',
        required: false,
      }],
    });

    if (bitcoins) {
      return res.status(201).send({ count_bitcoins: bitcoins.count_bitcoins });
    }
    return (error) => res.status(400).send(error.message);
  },

  async changeCountMoney(req, res) {
    const { tokenVerify } = req;

    const userMoney = await User.update(
      {
        count_money: req.body.count_money,
      },
      {
        where: { id: tokenVerify.id },
        include: [{
          model: Bitcoin,
          as: 'bitcoin',
          required: false,
        }],
      },
    );
    if (userMoney) return res.status(200).send(userMoney);
    return (error) => res.status(400).send(error.message);
  },

  async changeCountBitcoins(req, res) {
    const { tokenVerify } = req;
    const userBitcoins = await User.update(
      {
        count_bitcoins: req.body.count_bitcoins,
      },
      {
        where: { id: tokenVerify.id },
        include: [{
          model: Bitcoin,
          as: 'bitcoin',
          required: false,
        }],
      },
    );
    if (userBitcoins) return res.status(200).send(userBitcoins);
    return (error) => res.status(400).send(error.message);
  },
};
