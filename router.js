const router = require("express").Router();
const bcrypt = require("bcryptjs");




router.get("/add/:num1/:num2", (req, res) => {
    let num1 = parseInt(req.params.num1)
    let num2 = parseInt(req.params.num2)
    let result = num1 + num2
        res.status(200).json(result);
      }
);


router.get("/subtract/:num1/:num2", (req, res) => {
    let num1 = parseInt(req.params.num1)
    let num2 = parseInt(req.params.num2)
    let result = num1 - num2
        res.status(200).json(result);
      }
);

router.get("/addJSON/", (req, res) => {
    let num1 = req.body.num1
    let num2 = req.body.num2
    let result = num1 - num2
        res.status(200).json(result);
      }
);



router.post("/subtractJSON", (req, res) => {
    let num1 = req.body.num1
    let num2 = req.body.num2
    let result = num1 - num2
        res.status(200).json(result);
      }
);



module.exports = router;
