const User = require("../models/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res) => {
  const token = setTimeout(() => {
    return req.cookies.token;
  }, 6000);
  console.log(token);
  if (!token) {
    return res.status(400).json({ status: false});
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
     return res.status(401).send(err).json({ status: false })
    } else {
      const user = await User.findById(data.id);
      if (user) return res.json({ status: true, user: user.username  })
      else return res.status(402).json({ status: false })
    }
  })
}