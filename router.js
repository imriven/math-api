const router = require("express").Router();
const bcrypt = require("bcryptjs");




router.get("add/:num1/:num2", (req, res) => {
    let num1 = req.params.num1
    let num2 = req.params.num2
    let result = num1 + num2
    .then((result) => {
      if (!result) {
        res.status(404).json({ error: "Can't add" });
      } else {
        res.status(200).json(result);
      }
    })
    .catch((err) =>
      res.status(500).json({ error: `Error connecting to database, ${err}` })
    );
});

module.exports = router;
