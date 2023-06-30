const { History, User } = require('../models');

module.exports = {
  async addHistory(req, res) {
    const history = await History.create(
      {
        text_history: req.body.text_history,
        date: req.body.date,
        userId: req.body.id,
      },
    );
    if (history) {
      return res.status(201).send(history);
    }
    return (error) => res.status(400).send(error.message);
  },

  async getHistory(req, res) {
    const history = await History.findAll({
      includes: [{
        model: User,
        as: 'user',
      },
      {
        where: { userId: 1 },
      },
      ],
    });
    if (history) {
      return res.status(201).send(history);
    }
    return (error) => res.status(400).send(error.message);
  },
};
