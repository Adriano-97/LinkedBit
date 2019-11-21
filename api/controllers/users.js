function get(req, res) {
  res.json('User route');
}

module.exports = {
  getUsers: get
};
