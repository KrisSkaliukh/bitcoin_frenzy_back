const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const salt = bcrypt.genSaltSync(10);

const generateJwt = (id) => jwt.sign(
  { id },
  process.env.SECRET_KEY,
  { expiresIn: '24h' },
);

module.exports = {
  async signUpUser(req, res) {
    const {
      email, password, login, countBitcoins, countMoney,
    } = req.body;
    const person = await User.findOne({ where: { email } });
    if (person) {
      return res.status(403).json({ message: 'User is already exists' }).send({ error: 'User is already exists' });
    }
    const hashPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
      password: hashPassword,
      login,
      email,
      count_money: countMoney,
      count_bitcoins: countBitcoins,
    });
    return res.status(201).send(user);
  },

  async loginUser(req, res) {
    const {
      email, password,
    } = req.body;
    const person = await User.findOne({
      attributes: ['id', 'login', 'email', 'password'],
      where: { email },
    });
    if (!person) {
      return res.status(403).json({ message: 'User is not found' });
    }
    const comparePassword = bcrypt.compareSync(password, person.password);
    if (!comparePassword) {
      const result = {
        error: true,
        message: 'Wrong password',
      };
      return res.status(200).json(result);
    }
    const data = {
      token: generateJwt(person.id),
      user: {
        email: person.email,
        login: person.login,
        id: person.id,
      },
    };
    return res.status(200).send(data);
  },
};
