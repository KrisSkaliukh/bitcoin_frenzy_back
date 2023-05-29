const jwt = require('jsonwebtoken');

module.exports = {
  async tokenDecoder(req, res, next) {
    const token = req.headers.authorization;
    req.tokenVerify = jwt.verify(token, process.env.SECRET_KEY, (err, data) => {
      if (err) return res.status(403).send();
      return data;
    });
    next();
  },
};
