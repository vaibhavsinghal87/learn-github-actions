var express = require('express');
var router = express.Router();

const UsersModel = require("../models/users");

/* GET users listing. */
router.get("/", async (req, res) => {
  try {
    const users = await UsersModel.find({});
    res.status(200).json({
      status: 200,
      data: users
    });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

module.exports = router;
