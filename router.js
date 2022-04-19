const router = require("express").Router();
const bcrypt = require("bcryptjs");




router.get("add/{num1}/{num2}", (req, res) => {
    let result = num1 + num2
  req.params
    .then((result) => {
      if (!result) {
        res.status(404).json({ error: "Can't add" });
      } else {
        res.status(200).json(result);s
      }
    })
    .catch((err) =>
      res.status(500).json({ error: `Error connecting to database, ${err}` })
    );
});

