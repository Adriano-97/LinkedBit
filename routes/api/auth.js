const express = require("express");
const router = express.Router();

// @route api/users
// @desc Test route
// @acces Public
router.get("/", (req, res) => res.send("Auth route"));

module.exports = router;
