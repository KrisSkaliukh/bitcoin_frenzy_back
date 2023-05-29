const { Bitcoin, User } = require('../models');

module.exports = {
  async getBitcoinPrice(req, res) {
    const bitcoinPrice = await Bitcoin.findAll({
      includes: [{
        model: User,
        as: 'user',
      }],
    });
    if (bitcoinPrice) {
      return res.status(201).send(bitcoinPrice);
    }
    return (error) => res.status(400).send(error.message);
  },

  async changeBitcoinPrice(req, res) {
    const { tokenVerify } = req;
    const bitcoinPrice = await Bitcoin.update(
      {
        bitcoin_price: req.body.bitcoin_price,
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
    if (bitcoinPrice) return res.status(200).send(bitcoinPrice);
    return (error) => res.status(400).send(error.message);
  },
};
