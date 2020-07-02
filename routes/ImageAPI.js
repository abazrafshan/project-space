const router = require("express").Router()
const db = require("../models");
const passport = require("../config/passport");

router.get("/images", function(req, res) {
    db.Image.findAll({where: {userId: req.params.id}}).then(function(result) {
      return res.json(result);
    })
})

router.post("/images", function(req, res) {
    console.log(req.body)
    db.Image.create(req.body
    )
    .then(() => {
        res.redirect(307, "/api/gallery");
    })
    .catch(err => {
        res.status(401).json(err);
    });
})

module.exports = router;