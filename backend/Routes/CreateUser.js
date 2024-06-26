const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

router.post(
  "/createUser",
  [
    body("email").isEmail(),

    body("name").isLength({ min: 5 }),
    body("password", "Incorrect Password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      await User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        location: req.body.location,
      });
      res.json({ success: true });
    } catch (err) {
      console.error(err);
      res.json({ success: false });
    }
  }
);

router.post(
  "/loginUser",
  [
    body("email").isEmail(),

    body("password", "Incorrect Password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let email = req.body.email;
    try {
      let userData = await User.findOne({ email });
      if (!userData) {
        return res
          .status(400)
          .json({ errors: "Try logging with correct credentials" });
      }
      if (userData.password !== req.body.password) {
        return res
          .status(400)
          .json({ errors: "Try logging with correct credentials" });
      }
      return res.json({ success: true });
    } catch (err) {
      console.error(err);
      res.json({ success: false });
    }
  }
);

module.exports = router;
