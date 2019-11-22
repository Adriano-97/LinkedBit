const { check, validationResult } = require('express-validator/check');

function post(req, res) {
  console.log(req.body);

  res.json('User route');
}

module.exports = {
  postUsers: post
};
