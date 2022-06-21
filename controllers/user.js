const { User } = require('../models');

module.exports = {
  async getUser(req, res) {
    const user = await User.findAll();
    if (user) {
      return res.status(201).send(user);
    }
    return (error) => res.status(400).send(error.message);
  },
};
